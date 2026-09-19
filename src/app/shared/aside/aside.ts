import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  imports: [],
  selector: 'aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  private readonly router = inject(Router);

  async goTo(event: Event, sectionId: string) {
    event.preventDefault();
    await this.router.navigateByUrl('/inicio');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
