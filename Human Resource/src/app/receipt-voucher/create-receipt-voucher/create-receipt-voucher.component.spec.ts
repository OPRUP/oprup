import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceiptVoucherComponent } from './create-receipt-voucher.component';

describe('CreateReceiptVoucherComponent', () => {
  let component: CreateReceiptVoucherComponent;
  let fixture: ComponentFixture<CreateReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReceiptVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
