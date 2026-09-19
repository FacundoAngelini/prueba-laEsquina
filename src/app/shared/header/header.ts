import { Component, signal } from '@angular/core';
import { LoginModel } from '../login-modal/login-modal';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LoginModel, RouterLink],
  selector: 'header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  public readonly isLoginModelOpen = signal(false);
  openLogin() :void{
    this.isLoginModelOpen.set(true);
  }
  handleLoginClose(submitted:boolean):void{
    this.isLoginModelOpen.set(false);
  }
}
