import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.html',
  styles: [
    `
      /* Animation personnalisée pour le flux lumineux dans la ligne */
      @keyframes shimmer {
        0% {
          transform: translateX(-200%);
        }
        100% {
          transform: translateX(200%);
        }
      }
      .animate-shimmer {
        animation: shimmer 3s infinite linear;
      }
    `,
  ],
})
export class SectionTitle {
  @Input() title: string = '';
  @Input() subtitle?: string;
}
