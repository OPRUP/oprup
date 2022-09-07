import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCreditNoticeComponent } from './delete-credit-notice.component';

describe('DeleteCreditNoticeComponent', () => {
  let component: DeleteCreditNoticeComponent;
  let fixture: ComponentFixture<DeleteCreditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCreditNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCreditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
