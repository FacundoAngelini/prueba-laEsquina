import { Routes } from '@angular/router';
import { Inicio } from './shared/inicio/inicio';
import { Productos } from './products/productos';



export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }
];
