import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorNoticeComponent } from './debtor-notice.component';

describe('DebtorNoticeComponent', () => {
  let component: DebtorNoticeComponent;
  let fixture: ComponentFixture<DebtorNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtorNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
