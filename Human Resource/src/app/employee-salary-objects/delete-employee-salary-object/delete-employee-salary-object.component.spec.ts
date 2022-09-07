/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeleteEmployeeSalaryObjectComponent } from './delete-employee-salary-object.component';

describe('DeleteEmployeeSalaryObjectComponent', () => {
  let component: DeleteEmployeeSalaryObjectComponent;
  let fixture: ComponentFixture<DeleteEmployeeSalaryObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeSalaryObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeSalaryObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
