import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component'),
  },
  {
    path: '',
    title: 'USUARIOS',
    children: [
      {
        path: 'usuarios',
        title: 'Usuarios',
        loadComponent: () => import('./views/usuarios/usuarios.component'),
      },
      {
        path: 'clientes',
        title: 'Clientes',
        loadComponent: () => import('./views/clientes/clientes.component'),
      },
    ],
  },
  {
    path: '',
    title: 'TALENTO HUMANO',
    children: [
      {
        path: 'ingreso',
        title: 'Nuevo Ingreso',
        loadComponent: () => import('./views/usuarios/usuarios.component'),
      },
      {
        path: 'nomina',
        title: 'Nomina',
        loadComponent: () => import('./views/clientes/clientes.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
