import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './card.html',
})
export class Card {
  @Input() title = '';
  @Input() text = '';
  @Input() image = '';
  @Input() icon = '';
}
