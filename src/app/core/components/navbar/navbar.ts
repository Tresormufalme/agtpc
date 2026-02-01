import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  menuOpen = false;
  scrolled = false;

  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Présentation', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Galerie', path: '/galerie' },
  ];

  // Détecte le scroll pour réduire la taille de la navbar (effet magique)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    // S'assurer que le menu est fermé au changement de route
    this.closeMenu();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // Bloquer le scroll du corps quand le menu est ouvert
    document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
