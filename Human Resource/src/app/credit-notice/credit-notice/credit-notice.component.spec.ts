import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNoticeComponent } from './credit-notice.component';

describe('CreditNoticeComponent', () => {
  let component: CreditNoticeComponent;
  let fixture: ComponentFixture<CreditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
