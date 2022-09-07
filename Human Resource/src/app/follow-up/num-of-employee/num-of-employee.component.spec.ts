import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfEmployeeComponent } from './num-of-employee.component';

describe('NumOfEmployeeComponent', () => {
  let component: NumOfEmployeeComponent;
  let fixture: ComponentFixture<NumOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
