import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollReveal } from '../../shared/components/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SectionTitle, ScrollReveal],
  templateUrl: './contact.html',
})
export class Contact {
  // Ici on pourrait ajouter la logique de validation de formulaire réactif
  // Mais on garde la structure demandée par l'utilisateur sans changer la logique

  onSubmit() {
    console.log('Formulaire AGTPC envoyé avec succès !');
    // Déclencher ici une notification magique (Toast)
  }
}
