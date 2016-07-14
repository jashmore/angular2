import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes!!!!';
  public heroes: Hero[];

  selectedHero:  Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
