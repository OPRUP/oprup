import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee08BankAccountComponent } from './create-employee08-bank-account.component';

describe('CreateEmployee08BankAccountComponent', () => {
  let component: CreateEmployee08BankAccountComponent;
  let fixture: ComponentFixture<CreateEmployee08BankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee08BankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee08BankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
