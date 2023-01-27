import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="w-screen h-screen flex flex-col">
      <app-header></app-header>
      <router-outlet class="flex-1"></router-outlet>
      <app-navbar></app-navbar>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ad-como';
}
