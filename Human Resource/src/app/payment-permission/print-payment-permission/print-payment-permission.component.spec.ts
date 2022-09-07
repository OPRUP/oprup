import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPaymentPermissionComponent } from './print-payment-permission.component';

describe('PrintPaymentPermissionComponent', () => {
  let component: PrintPaymentPermissionComponent;
  let fixture: ComponentFixture<PrintPaymentPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPaymentPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPaymentPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
