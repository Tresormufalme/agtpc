import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
})
export class Footer implements OnInit {
  // Année dynamique pour le copyright
  year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
