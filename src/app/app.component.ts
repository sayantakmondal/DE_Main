import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
  <app-home></app-home>
  <app-products></app-products>
  <app-cart></app-cart>

  `,

  styles: []
})
export class AppComponent {
  title = 'my-app';
}
