import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lightbox.html',
})
export class Lightbox {
  @Input() images: string[] = [];
  open = false;
  index = 0;

  show(i: number) {
    this.index = i;
    this.open = true;
  }

  close() {
    this.open = false;
  }

  next() {
    this.index = (this.index + 1) % this.images.length;
  }

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }
}
