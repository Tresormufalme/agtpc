import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

interface Realisation {
  id: number;
  title: string;
  description: string;
  category: 'securite' | 'formation' | 'infrastructure' | string;
  categoryLabel: string;
  src: string;
  icon: string;
  kpi: string;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule, SectionTitle, ScrollReveal],
  templateUrl: './realisations.html',
})
export class Realisations implements OnInit {
  // Base de données source
  private allRealisations: Realisation[] = [
    {
      id: 1,
      title: 'Sécurisation & Gilets',
      description:
        "Distribution de gilets sécurisés et numérotés pour l'identification systématique des chauffeurs au Sud-Kivu.",
      category: 'securite',
      categoryLabel: 'Sécurité & Gilets',
      src: 'assets/gallery/thumbs/42.jpg',
      icon: 'fa-vest',
      kpi: '+5000 Gilets',
    },
    {
      id: 2,
      title: 'Formation Conducteurs',
      description:
        'Programmes intensifs en auto-école pour garantir des chauffeurs qualifiés et réduire les accidents.',
      category: 'formation',
      categoryLabel: 'Formation',
      src: 'assets/gallery/thumbs/52.jpg',
      icon: 'fa-graduation-cap',
      kpi: '85% Réduction accidents',
    },
    {
      id: 3,
      title: 'Gares Modernes',
      description:
        'Aménagement de gares routières et toilettes publiques pour un environnement de transport sain.',
      category: 'infrastructure',
      categoryLabel: 'Infrastructure',
      src: 'assets/gallery/thumbs/40.jpg',
      icon: 'fa-building-columns',
      kpi: '12 Gares construites',
    },
    {
      id: 4,
      title: 'Identification Lacustre',
      description:
        'Dénombrement et suivi des bateaux cargo pour sécuriser le transport des biens et des personnes.',
      category: 'securite',
      categoryLabel: 'Sécurité',
      src: 'assets/gallery/thumbs/45.jpg',
      icon: 'fa-ship',
      kpi: '100% Identifiés',
    },
    {
      id: 5,
      title: 'Centres de Santé Proximité',
      description:
        "Mise en place de dispensaires près des gares pour les soins médicaux d'urgence des transporteurs.",
      category: 'infrastructure',
      categoryLabel: 'Social',
      src: 'assets/gallery/thumbs/48.jpg',
      icon: 'fa-hospital-user',
      kpi: 'Accès soins 24/7',
    },
    {
      id: 6,
      title: 'Auto-écoles Spécialisées',
      description:
        'Écoles de conduite pour motos et Bajaj visant à professionnaliser le secteur informel.',
      category: 'formation',
      categoryLabel: 'Éducation',
      src: 'assets/gallery/thumbs/53.jpg',
      icon: 'fa-motorcycle',
      kpi: 'Jeunes formés',
    },
  ];

  // Propriété utilisée par le @for dans le HTML
  filteredRealisations: Realisation[] = [];

  ngOnInit(): void {
    // Initialisation : afficher tout au chargement
    this.filteredRealisations = this.allRealisations;
  }

  /**
   * Méthode de filtrage appelée par les boutons (click)
   */
  filterBy(category: string): void {
    if (category === 'all') {
      this.filteredRealisations = this.allRealisations;
    } else {
      this.filteredRealisations = this.allRealisations.filter((item) => item.category === category);
    }
  }
}
