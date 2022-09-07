/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomsTaskeen_deleteComponent } from './RoomsTaskeen_delete.component';

describe('RoomsTaskeen_deleteComponent', () => {
  let component: RoomsTaskeen_deleteComponent;
  let fixture: ComponentFixture<RoomsTaskeen_deleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsTaskeen_deleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTaskeen_deleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
