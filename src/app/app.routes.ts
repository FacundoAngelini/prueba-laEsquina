import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
},
{
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio'),//apunta a la carpeta donde se encuentra el componente
},
{
    path: 'productos',
    loadComponent: () => import('./products/ui/product-layout/product-layout'), //el layouyt,
    loadChildren: () => import('./products/product.routes'), //rutas hias
},
{
    path: '**',
    redirectTo: 'inicio',
  },
];

export const appRoutes: Routes = [ ]