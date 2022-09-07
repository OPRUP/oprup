import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReceiptVoucherComponent } from './print-receipt-voucher.component';

describe('PrintReceiptVoucherComponent', () => {
  let component: PrintReceiptVoucherComponent;
  let fixture: ComponentFixture<PrintReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintReceiptVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
