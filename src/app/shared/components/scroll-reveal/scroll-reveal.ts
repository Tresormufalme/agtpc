import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-reveal',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class ScrollReveal implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    element.classList.add('opacity-0', 'translate-y-8', 'transition', 'duration-700');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            element.classList.remove('opacity-0', 'translate-y-8');
            element.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(element);
          }
        });
      },
      { threshold: 0.15 },
    );

    obs.observe(element);
  }
}
