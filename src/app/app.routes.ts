import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/administration/administration-routing')
        .then(c => c.routes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/pages/login/login')
        .then(c => c.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./modules/auth/pages/register/register')
        .then(c => c.Register),
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
