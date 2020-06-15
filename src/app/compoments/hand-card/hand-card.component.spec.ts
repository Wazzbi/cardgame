/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HandCardComponent } from './hand-card.component';

describe('HandCardComponent', () => {
  let component: HandCardComponent;
  let fixture: ComponentFixture<HandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
