import { Hero } from './hero';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

/*import {
  RouterTestingModule
} from '@angular/router/testing';
*/

export class HeroServiceStub {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve([{id: 1, name: 'john'}]);
  }

  create(name: string): Promise<Hero> {
    return Promise.resolve([{id: 1, name: 'john'}]);
  }

  delete(id: number): Promise<void> {
    return Promise.resolve(null);
  }
}


describe('HeroesComponent', function () {
  let de: DebugElement;
  let comp: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;


  // This async beforeEach always completes before the second, synchronous beforeEach starts
  beforeEach(async(() => {

    // let service = new HeroServiceStub();

    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers:    [ {provide: HeroService, useClass: HeroServiceStub } ]
    })
      .compileComponents().then(() => {

      fixture = TestBed.createComponent(HeroesComponent);

      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h2'));

    });

  }));


  beforeEach(() => {

    /*
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [ RouterTestingModule],
      providers:    [ RouterTestingModule, {provide: HeroService, useClass: HeroServiceStub} ]
    });


    fixture = TestBed.createComponent(HeroesComponent);

    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
     */
    // TwainService actually injected into the component
    /*heroService = fixture.debugElement.injector.get(HeroService);

    let spy: any = spyOn(heroService, 'getHeroes')
      .and.returnValue(Promise.resolve({id: 1, name: 'John'}));*/

  });


  it('should create component', () => expect(comp).toBeDefined() );

/*
    it('should create component after getHeroes promise (async)', async(() => {

      fixture.whenStable().then(() => { // wait for async getQuote

        fixture.detectChanges();        // update view with quote
        expect(comp).toBeDefined();

      });

    }));*/
});
