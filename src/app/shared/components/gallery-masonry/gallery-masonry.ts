import { Component, Input, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { Lightbox } from '../lightbox/lightbox';

@Component({
  selector: 'app-gallery-masonry',
  standalone: true,
  imports: [NgFor, Lightbox],
  templateUrl: './gallery-masonry.html',
})
export class GalleryMasonry {
  @Input() images: string[] = [];
  @ViewChild(Lightbox) lightbox!: Lightbox;

  open(i: number) {
    this.lightbox.show(i);
  }
}
