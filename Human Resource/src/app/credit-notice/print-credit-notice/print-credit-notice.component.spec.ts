import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCreditNoticeComponent } from './print-credit-notice.component';

describe('PrintCreditNoticeComponent', () => {
  let component: PrintCreditNoticeComponent;
  let fixture: ComponentFixture<PrintCreditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCreditNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCreditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
