import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  // This async beforeEach always completes before the second, synchronous beforeEach starts
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h2> Tour of Heroes', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;

    expect(h1.innerText).toMatch(/Tour of Heroes/i,
      '<h1> should say something about "Tour of Heroes"');
  });


});
