import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedCustomerComponent } from './qualified-customer.component';

describe('QualifiedCustomerComponent', () => {
  let component: QualifiedCustomerComponent;
  let fixture: ComponentFixture<QualifiedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiedCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
