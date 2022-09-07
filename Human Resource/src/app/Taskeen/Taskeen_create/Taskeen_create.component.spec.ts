/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Taskeen_createComponent } from './Taskeen_create.component';

describe('Taskeen_createComponent', () => {
  let component: Taskeen_createComponent;
  let fixture: ComponentFixture<Taskeen_createComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskeen_createComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskeen_createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
