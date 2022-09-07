import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDebtorNoticeComponent } from './delete-debtor-notice.component';

describe('DeleteDebtorNoticeComponent', () => {
  let component: DeleteDebtorNoticeComponent;
  let fixture: ComponentFixture<DeleteDebtorNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDebtorNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDebtorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
