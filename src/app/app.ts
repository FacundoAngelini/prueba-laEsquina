import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Aside } from "./aside/aside";
import {Footer} from "./footer/footer";

@Component({
  imports: [Header, Aside, Footer, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-intro');
}
