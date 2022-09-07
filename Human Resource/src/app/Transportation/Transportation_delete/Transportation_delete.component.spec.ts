/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Transportation_deleteComponent } from './Transportation_delete.component';

describe('Transportation_deleteComponent', () => {
  let component: Transportation_deleteComponent;
  let fixture: ComponentFixture<Transportation_deleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transportation_deleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transportation_deleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
