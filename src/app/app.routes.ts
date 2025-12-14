import { Routes } from '@angular/router';

export const routes: Routes = [

  // 🔐 Auth
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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

  // 🛠 Administración
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/administration/administration-routing')
        .then(c => c.routes),
  },
  
    // 👇 RUTA PARA VER PAGE1 (CHAT)
  {
    path: 'chat',
    loadComponent: () =>
      import('./modules/auth/pages/Pages/Page1')
        .then(c => c.Page1),
  },

  // ❌ Ruta no encontrada
  {
    path: '**',
    redirectTo: 'login',
  }
];
