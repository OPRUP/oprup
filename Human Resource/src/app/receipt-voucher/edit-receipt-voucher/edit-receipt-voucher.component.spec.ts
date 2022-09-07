import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceiptVoucherComponent } from './edit-receipt-voucher.component';

describe('EditReceiptVoucherComponent', () => {
  let component: EditReceiptVoucherComponent;
  let fixture: ComponentFixture<EditReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReceiptVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
