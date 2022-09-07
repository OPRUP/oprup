/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Taskeen_PrintComponent } from './Taskeen_Print.component';

describe('Taskeen_PrintComponent', () => {
  let component: Taskeen_PrintComponent;
  let fixture: ComponentFixture<Taskeen_PrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskeen_PrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskeen_PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
