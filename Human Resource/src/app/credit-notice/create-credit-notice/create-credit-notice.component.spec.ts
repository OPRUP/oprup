import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditNoticeComponent } from './create-credit-notice.component';

describe('CreateCreditNoticeComponent', () => {
  let component: CreateCreditNoticeComponent;
  let fixture: ComponentFixture<CreateCreditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCreditNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCreditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
