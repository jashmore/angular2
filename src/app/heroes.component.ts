import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService){

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  public getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
