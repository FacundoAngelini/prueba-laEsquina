import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './shared/aside/aside';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';


@Component({
  imports: [RouterOutlet, Header, Footer, Aside],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}