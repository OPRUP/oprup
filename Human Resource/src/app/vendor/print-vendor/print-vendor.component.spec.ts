import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintVendorComponent } from './print-vendor.component';

describe('PrintVendorComponent', () => {
  let component: PrintVendorComponent;
  let fixture: ComponentFixture<PrintVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
