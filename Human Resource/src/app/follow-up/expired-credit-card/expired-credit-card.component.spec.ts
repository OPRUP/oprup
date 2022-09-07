import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredCreditCardComponent } from './expired-credit-card.component';

describe('ExpiredCreditCardComponent', () => {
  let component: ExpiredCreditCardComponent;
  let fixture: ComponentFixture<ExpiredCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
