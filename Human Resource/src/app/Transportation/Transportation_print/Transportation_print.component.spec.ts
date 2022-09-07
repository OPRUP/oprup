/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Transportation_printComponent } from './Transportation_print.component';

describe('Transportation_printComponent', () => {
  let component: Transportation_printComponent;
  let fixture: ComponentFixture<Transportation_printComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transportation_printComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transportation_printComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
