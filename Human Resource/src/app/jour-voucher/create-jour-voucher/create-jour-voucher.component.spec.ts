import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJourVoucherComponent } from './create-jour-voucher.component';

describe('CreateJourVoucherComponent', () => {
  let component: CreateJourVoucherComponent;
  let fixture: ComponentFixture<CreateJourVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJourVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJourVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
