/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VacationsComponent } from './vacations.component';

describe('VacationsComponent', () => {
  let component: VacationsComponent;
  let fixture: ComponentFixture<VacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
