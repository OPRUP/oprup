import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelingEmployeeComponent } from './edit-traveling-employee.component';

describe('EditTravelingEmployeeComponent', () => {
  let component: EditTravelingEmployeeComponent;
  let fixture: ComponentFixture<EditTravelingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravelingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
