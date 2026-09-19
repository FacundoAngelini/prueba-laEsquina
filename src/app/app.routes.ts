import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';



export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }
];
