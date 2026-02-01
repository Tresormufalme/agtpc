import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [NgIf],
  templateUrl: './section-title.html',
})
export class SectionTitle {
  @Input() title = '';
  @Input() subtitle = '';
}
