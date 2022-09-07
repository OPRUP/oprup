import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingEmployeeComponent } from './travelling-employee.component';

describe('TravellingEmployeeComponent', () => {
  let component: TravellingEmployeeComponent;
  let fixture: ComponentFixture<TravellingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
