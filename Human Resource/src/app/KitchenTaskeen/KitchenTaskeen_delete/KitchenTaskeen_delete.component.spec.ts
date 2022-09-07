/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KitchenTaskeen_deleteComponent } from './KitchenTaskeen_delete.component';

describe('KitchenTaskeen_deleteComponent', () => {
  let component: KitchenTaskeen_deleteComponent;
  let fixture: ComponentFixture<KitchenTaskeen_deleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenTaskeen_deleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTaskeen_deleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
