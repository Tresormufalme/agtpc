import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './hero.html',
})
export class Hero {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
}
