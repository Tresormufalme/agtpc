import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { GalleryMasonry } from '../../shared/components/gallery-masonry/gallery-masonry';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule, SectionTitle, GalleryMasonry, ScrollReveal],
  templateUrl: './galerie.html',
})
export class Galerie implements OnInit {
  // On prépare une liste d'images riche avec des légendes inspirées du TITRE VII
  images = [
    {
      src: 'assets/gallery/thumbs/42.jpg',
      alt: 'Distribution de gilets',
      caption: 'Sécurisation des conducteurs au Sud-Kivu',
      size: 'large', // Pour le Masonry
    },
    {
      src: 'assets/gallery/thumbs/53.jpg',
      alt: 'Identification motos',
      caption: "Système d'identification par gilets numérotés",
      size: 'medium',
    },
    {
      src: 'assets/gallery/thumbs/52.jpg',
      alt: 'Formation conduite',
      caption: 'Modules de formation pour jeunes transporteurs',
      size: 'small',
    },
    {
      src: 'assets/gallery/thumbs/40.jpg',
      alt: 'Gares routières',
      caption: 'Infrastructures : Construction de gares modernes',
      size: 'medium',
    },
    {
      src: 'assets/gallery/thumbs/45.jpg',
      alt: 'Bateaux Cargo',
      caption: 'Logistique lacustre et transport des biens',
      size: 'large',
    },
    {
      src: 'assets/gallery/thumbs/48.jpg',
      alt: 'Réunion autorités',
      caption: 'Médiation entre État et Transporteurs',
      size: 'small',
    },
    // Répétition intelligente pour simuler les "100 images"
    ...Array.from({ length: 12 }).map((_, i) => ({
      src: `assets/gallery/thumbs/${(i % 10) + 40}.jpg`,
      alt: `Action terrain ${i}`,
      caption: `AGTPC Impact - Phase ${i + 1}`,
      size: i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small',
    })),
  ];

  ngOnInit(): void {
    // Animation de scroll au début
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
