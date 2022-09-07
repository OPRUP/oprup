/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomsTaskeen_createComponent } from './RoomsTaskeen_create.component';

describe('RoomsTaskeen_createComponent', () => {
  let component: RoomsTaskeen_createComponent;
  let fixture: ComponentFixture<RoomsTaskeen_createComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsTaskeen_createComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTaskeen_createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
