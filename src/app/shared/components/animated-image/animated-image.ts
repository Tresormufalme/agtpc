import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-animated-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './animated-image.html',
})
export class AnimatedImage {
  @Input() src = '';
  @Input() alt = '';
}
