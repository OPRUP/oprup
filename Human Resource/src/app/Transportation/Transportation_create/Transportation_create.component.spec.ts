/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Transportation_createComponent } from './Transportation_create.component';

describe('Transportation_createComponent', () => {
  let component: Transportation_createComponent;
  let fixture: ComponentFixture<Transportation_createComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transportation_createComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transportation_createComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
