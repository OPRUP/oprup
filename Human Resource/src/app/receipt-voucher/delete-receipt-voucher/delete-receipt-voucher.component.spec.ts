import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReceiptVoucherComponent } from './delete-receipt-voucher.component';

describe('DeleteReceiptVoucherComponent', () => {
  let component: DeleteReceiptVoucherComponent;
  let fixture: ComponentFixture<DeleteReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReceiptVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
