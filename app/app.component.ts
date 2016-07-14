/**
 * Created by john on 10/07/2016.
 */
import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})
export class AppComponent {
  constructor() {

  }
}
