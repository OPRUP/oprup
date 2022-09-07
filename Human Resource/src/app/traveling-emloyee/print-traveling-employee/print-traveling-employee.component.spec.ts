import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTravelingEmployeeComponent } from './print-traveling-employee.component';

describe('PrintTravelingEmployeeComponent', () => {
  let component: PrintTravelingEmployeeComponent;
  let fixture: ComponentFixture<PrintTravelingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTravelingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTravelingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
