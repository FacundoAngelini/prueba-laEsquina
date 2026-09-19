import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginModel } from '../login-modal/login-modal';

@Component({
  imports: [LoginModel, RouterLink, RouterLinkActive],
  selector: 'header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  public readonly isLoginModelOpen = signal(false);

  openLogin(): void {
    this.isLoginModelOpen.set(true);
  }

  handleLoginClose(submitted: boolean): void {
    this.isLoginModelOpen.set(false);
  }
}