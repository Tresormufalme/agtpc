import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Realisations } from './pages/realisations/realisations';
import { Galerie } from './pages/galerie/galerie';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Accueil — AGTPC',
  },
  {
    path: 'about',
    component: About,
    title: 'Présentation — AGTPC',
  },
  {
    path: 'services',
    component: Services,
    title: 'Services — AGTPC',
  },
  {
    path: 'realisations',
    component: Realisations,
    title: 'Réalisations — AGTPC',
  },
  {
    path: 'galerie',
    component: Galerie,
    title: 'Galerie — AGTPC',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact — AGTPC',
  },

  // fallback — redirection si route inconnue
  {
    path: '**',
    redirectTo: '',
  },
];
