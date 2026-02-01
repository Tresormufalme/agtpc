import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { AnimatedImage } from '../../shared/components/animated-image/animated-image';

@Component({
  standalone: true,
  imports: [SectionTitle, AnimatedImage],
  templateUrl: './realisations.html',
})
export class Realisations {}
