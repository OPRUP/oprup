/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KitchenTaskeen_createComponent } from './KitchenTaskeen_create.component';

describe('KitchenTaskeen_createComponent', () => {
  let component: KitchenTaskeen_createComponent;
  let fixture: ComponentFixture<KitchenTaskeen_createComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenTaskeen_createComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTaskeen_createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
