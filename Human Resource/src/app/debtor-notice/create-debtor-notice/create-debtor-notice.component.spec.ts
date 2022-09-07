import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDebtorNoticeComponent } from './create-debtor-notice.component';

describe('CreateDebtorNoticeComponent', () => {
  let component: CreateDebtorNoticeComponent;
  let fixture: ComponentFixture<CreateDebtorNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDebtorNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDebtorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
