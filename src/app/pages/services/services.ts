import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionCards } from '../../shared/components/section-cards/section-cards';

@Component({
  standalone: true,
  imports: [SectionTitle, SectionCards],
  templateUrl: './services.html',
})
export class Services {
  items = [
    {
      title: 'Logistique & Dédouanement',
      text: 'Gestion complète des flux et formalités.',
      image: 'assets/gallery/thumbs/56.jpg',
      icon: 'fa-solid fa-box',
    },
    {
      title: 'Études de projet',
      text: 'Élaboration, suivi et évaluation.',
      image: 'assets/gallery/thumbs/36.jpg',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Comptabilité & Audit',
      text: 'Transparence financière.',
      image: 'assets/gallery/thumbs/100.jpg',
      icon: 'fa-solid fa-calculator',
    },
  ];
}
