import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  template: `
    <nav>
      <div><a routerLink="/">Home</a></div>
      <div><a routerLink="/tasks">Tasks</a></div>
    </nav>
  `,
})
export class NavComponent {}
