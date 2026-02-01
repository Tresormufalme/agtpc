import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionCards } from '../../shared/components/section-cards/section-cards';
import { Cta } from '../../shared/components/cta/cta';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, SectionTitle, SectionCards, Cta, ScrollReveal],
  templateUrl: './home.html',
})
export class Home {
  services = [
    {
      title: 'Transport & Cargo',
      text: 'Organisation moderne du transport des personnes et des biens.',
      image: 'assets/services/s4.jpg',
      icon: 'fa-solid fa-truck',
    },
    {
      title: 'Logistique',
      text: 'Coordination, flux, planification et performance.',
      image: 'assets/services/s2.jpg',
      icon: 'fa-solid fa-route',
    },
    {
      title: 'Sécurité',
      text: 'Protection des conducteurs, clients et biens.',
      image: 'assets/services/s3.jpg',
      icon: 'fa-solid fa-shield',
    },
  ];
}
