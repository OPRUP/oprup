import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDebtorNoticeComponent } from './print-debtor-notice.component';

describe('PrintDebtorNoticeComponent', () => {
  let component: PrintDebtorNoticeComponent;
  let fixture: ComponentFixture<PrintDebtorNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDebtorNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDebtorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
