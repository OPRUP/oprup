import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeResidenceAndTransportationComponent } from './edit-employee-residence-and-transportation.component';

describe('EditEmployeeResidenceAndTransportationComponent', () => {
  let component: EditEmployeeResidenceAndTransportationComponent;
  let fixture: ComponentFixture<EditEmployeeResidenceAndTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeResidenceAndTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeResidenceAndTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
