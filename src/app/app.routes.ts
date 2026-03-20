import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.Sobre),
  },
  {
    path: 'stacks',
    loadComponent: () => import('./pages/stacks/stacks').then((m) => m.Stacks),
  },
  {
    path: 'projetos',
    loadComponent: () => import('./pages/projetos/projetos').then((m) => m.Projetos),
  },
];
