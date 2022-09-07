import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelingEmployeeComponent } from './traveling-employee.component';

describe('TravelingEmployeeComponent', () => {
  let component: TravelingEmployeeComponent;
  let fixture: ComponentFixture<TravelingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
