/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomsTaskeen_printComponent } from './RoomsTaskeen_print.component';

describe('RoomsTaskeen_printComponent', () => {
  let component: RoomsTaskeen_printComponent;
  let fixture: ComponentFixture<RoomsTaskeen_printComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsTaskeen_printComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsTaskeen_printComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
