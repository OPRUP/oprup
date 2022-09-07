import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditNoticeComponent } from './edit-credit-notice.component';

describe('EditCreditNoticeComponent', () => {
  let component: EditCreditNoticeComponent;
  let fixture: ComponentFixture<EditCreditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreditNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
