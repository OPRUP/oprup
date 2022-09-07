/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Transportation_editComponent } from './Transportation_edit.component';

describe('Transportation_editComponent', () => {
  let component: Transportation_editComponent;
  let fixture: ComponentFixture<Transportation_editComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transportation_editComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transportation_editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
