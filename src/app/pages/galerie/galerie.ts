import { Component } from '@angular/core';
import { GalleryMasonry } from '../../shared/components/gallery-masonry/gallery-masonry';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  standalone: true,
  imports: [GalleryMasonry, SectionTitle],
  templateUrl: './galerie.html',
})
export class Galerie {
  images = Array.from({ length: 100 }).map((_, i) => `assets/gallery/thumbs/${i + 1}.jpg`);
}
