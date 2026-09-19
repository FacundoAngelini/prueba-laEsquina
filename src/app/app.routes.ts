import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio'),
  },
  {
    path: 'productos',
    loadComponent: () => import('./products/ui/product-layout/product-layout'),
    loadChildren: () => import('./products/product.routes'),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];