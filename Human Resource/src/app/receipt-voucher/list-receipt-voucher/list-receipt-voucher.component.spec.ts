import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceiptVoucherComponent } from './list-receipt-voucher.component';

describe('ListReceiptVoucherComponent', () => {
  let component: ListReceiptVoucherComponent;
  let fixture: ComponentFixture<ListReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReceiptVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
