import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPermissionComponent } from './payment-permission.component';

describe('PaymentPermissionComponent', () => {
  let component: PaymentPermissionComponent;
  let fixture: ComponentFixture<PaymentPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
