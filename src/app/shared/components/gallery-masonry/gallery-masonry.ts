import { Component, Input, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // Ajout de NgIf pour plus de sécurité
import { Lightbox } from '../lightbox/lightbox';

// On définit une interface pour supporter les deux formats
export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
  size?: string;
}

@Component({
  selector: 'app-gallery-masonry',
  standalone: true,
  imports: [NgFor, NgIf, Lightbox],
  templateUrl: './gallery-masonry.html',
})
export class GalleryMasonry {
  // On change le type ici : accepte string[] OU GalleryImage[]
  @Input() images: any[] = [];
  @ViewChild(Lightbox) lightbox!: Lightbox;

  // Méthode utilitaire pour extraire la source de l'image peu importe le format
  getImageSrc(image: string | GalleryImage): string {
    return typeof image === 'string' ? image : image.src;
  }

  // Méthode utilitaire pour extraire uniquement les URLs pour la Lightbox
  get lightboxImages(): string[] {
    return this.images.map((img) => (typeof img === 'string' ? img : img.src));
  }

  open(i: number) {
    // On passe les URLs extraites à la lightbox
    this.lightbox.show(i);
  }
}
