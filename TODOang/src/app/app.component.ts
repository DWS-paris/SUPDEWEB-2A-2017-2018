import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <main>
      <app-dashboard></app-dashboard>
    </main>
    
    <app-footer></app-footer>
  `
})
export class AppComponent {}
