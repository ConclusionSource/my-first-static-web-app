import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} (test2)</div>`,
})
export class AppComponent {
  value = 'World';
}
