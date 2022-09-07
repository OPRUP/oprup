import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDebtorNoticeComponent } from './edit-debtor-notice.component';

describe('EditDebtorNoticeComponent', () => {
  let component: EditDebtorNoticeComponent;
  let fixture: ComponentFixture<EditDebtorNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDebtorNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDebtorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
