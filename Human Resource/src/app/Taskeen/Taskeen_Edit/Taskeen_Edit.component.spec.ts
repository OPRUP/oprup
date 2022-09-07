/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Taskeen_EditComponent } from './Taskeen_Edit.component';

describe('Taskeen_EditComponent', () => {
  let component: Taskeen_EditComponent;
  let fixture: ComponentFixture<Taskeen_EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskeen_EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskeen_EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
