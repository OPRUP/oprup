import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTravelingEmployeeComponent } from './delete-traveling-employee.component';

describe('DeleteTravelingEmployeeComponent', () => {
  let component: DeleteTravelingEmployeeComponent;
  let fixture: ComponentFixture<DeleteTravelingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTravelingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTravelingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
