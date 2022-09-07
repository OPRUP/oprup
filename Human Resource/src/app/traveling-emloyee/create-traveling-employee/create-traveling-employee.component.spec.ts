import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelingEmployeeComponent } from './create-traveling-employee.component';

describe('CreateTravelingEmployeeComponent', () => {
  let component: CreateTravelingEmployeeComponent;
  let fixture: ComponentFixture<CreateTravelingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTravelingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
