import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSalesinvoiceComponent } from './print-salesinvoice.component';

describe('PrintSalesinvoiceComponent', () => {
  let component: PrintSalesinvoiceComponent;
  let fixture: ComponentFixture<PrintSalesinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSalesinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSalesinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
