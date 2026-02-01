import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';
import { AnimatedImage } from '../../shared/components/animated-image/animated-image';

@Component({
  standalone: true,
  imports: [SectionTitle, ScrollReveal, AnimatedImage],
  templateUrl: './about.html',
})
export class About {}
