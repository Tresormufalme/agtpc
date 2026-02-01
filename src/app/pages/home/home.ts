import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajouté pour les boucles si besoin
import { Hero } from '../../shared/components/hero/hero';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionCards } from '../../shared/components/section-cards/section-cards';
import { Cta } from '../../shared/components/cta/cta';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, SectionTitle, SectionCards, Cta, ScrollReveal],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  // Configuration des services basée sur le document AGTPC
  // Chaque service reçoit une couleur de ta palette pour l'élégance
  services = [
    {
      title: 'Transport & Cargo',
      text: 'Organisation moderne du transport des personnes et des biens, incluant motos, bus et bateaux[cite: 2, 3, 4].',
      image: 'assets/services/s4.jpg',
      icon: 'fa-solid fa-ship',
      accentColor: '#82A8B8', // Bleu clair de ta palette
    },
    {
      title: 'Logistique & Douane',
      text: 'Coordination des flux, planification et performance du dédouanement[cite: 5, 6].',
      image: 'assets/services/s2.jpg',
      icon: 'fa-solid fa-box-open',
      accentColor: '#627D87', // Bleu gris
    },
    {
      title: 'Sécurité & Protection',
      text: 'Garantir la sécurité du milieu, des conducteurs, des clients et de leurs biens[cite: 11, 12, 13, 14].',
      image: 'assets/services/s3.jpg',
      icon: 'fa-solid fa-shield-halved',
      accentColor: '#4D676E', // Bleu sombre
    },
    {
      title: 'Étude & Projets',
      text: 'Élaboration, suivi et évaluation rigoureuse de projets de transport[cite: 7].',
      image: 'assets/services/s1.jpg',
      icon: 'fa-solid fa-file-signature',
      accentColor: '#82A8B8',
    },
    {
      title: 'Expertise Juridique',
      text: 'Aide juridique et médiation entre l’État et les transporteurs en cas de différends[cite: 9, 26].',
      image: 'assets/services/s5.jpg',
      icon: 'fa-solid fa-gavel',
      accentColor: '#627D87',
    },
    {
      title: 'Audit & Comptabilité',
      text: 'Gestion saine des cotisations et taxes pour une transparence totale[cite: 8, 25].',
      image: 'assets/services/s6.jpg',
      icon: 'fa-solid fa-chart-line',
      accentColor: '#334344', // Ardoise foncée
    },
  ];

  // Indicateurs clés pour l'animation des compteurs ou des badges
  stats = [
    {
      label: 'Identification',
      icon: 'fa-id-card',
      detail: 'Systématique des chauffeurs [cite: 32]',
    },
    {
      label: 'Formation',
      icon: 'fa-graduation-cap',
      detail: 'Écoles de conduite professionnelles [cite: 22]',
    },
    {
      label: 'Infrastructures',
      icon: 'fa-faucet-drip',
      detail: 'Toilettes publics et arrêts de bus [cite: 39]',
    },
    {
      label: 'Solidarité',
      icon: 'fa-handshake-angle',
      detail: 'Mutuelles de santé et micro-finance [cite: 60, 61]',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Logique pour initialiser des animations de lumière au chargement si nécessaire
    console.log('AGTPC Home initialized with premium dark theme');
  }
}
