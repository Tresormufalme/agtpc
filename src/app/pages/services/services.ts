import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionCards } from '../../shared/components/section-cards/section-cards';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitle, SectionCards, ScrollReveal],
  templateUrl: './services.html',
})
export class Services implements OnInit {
  // Éléments pour le composant <app-section-cards>
  // On utilise ici les 3 piliers principaux du début pour la grille
  items = [
    {
      title: 'Identification Systématique',
      text: 'Recensement et numérotation de tous les enjeux de transport et de leurs conducteurs pour une base de données interactive.',
      image: 'assets/services/s1.jpg',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'Formation & Sécurité',
      text: "Création d'écoles de conduite professionnelles et distribution de gilets sécurisés numérotés.",
      image: 'assets/services/s2.jpg',
      icon: 'fa-solid fa-user-shield',
    },
    {
      title: 'Gestion des Revenus',
      text: 'Comptabilité saine et collecte optimisée des cotisations et taxes au profit de la province et des membres.',
      image: 'assets/services/s3.jpg',
      icon: 'fa-solid fa-vault',
    },
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
