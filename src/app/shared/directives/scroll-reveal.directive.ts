import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    element.classList.add('opacity-0', 'translate-y-8', 'transition', 'duration-700', 'ease-out');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove('opacity-0', 'translate-y-8');
            element.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
  }
}
