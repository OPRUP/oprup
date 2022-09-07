import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiwaEmployeeComponent } from './qiwa-employee.component';

describe('QiwaEmployeeComponent', () => {
  let component: QiwaEmployeeComponent;
  let fixture: ComponentFixture<QiwaEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QiwaEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QiwaEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
