import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'administration',
    loadComponent: () => import('./pages/main-administration/main-administration').then(c => c.MainAdministration),
  }
];
