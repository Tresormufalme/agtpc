import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Card } from '../card/card';

@Component({
  selector: 'app-section-cards',
  standalone: true,
  imports: [NgFor, Card],
  templateUrl: './section-cards.html',
})
export class SectionCards {
  @Input() items: any[] = [];
}
