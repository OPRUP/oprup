import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResidenceAndTransportationComponent } from './employee-residence-and-transportation.component';

describe('EmployeeResidenceAndTransportationComponent', () => {
  let component: EmployeeResidenceAndTransportationComponent;
  let fixture: ComponentFixture<EmployeeResidenceAndTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeResidenceAndTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResidenceAndTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
