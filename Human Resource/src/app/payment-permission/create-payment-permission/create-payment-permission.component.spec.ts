import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentPermissionComponent } from './create-payment-permission.component';

describe('CreatePaymentPermissionComponent', () => {
  let component: CreatePaymentPermissionComponent;
  let fixture: ComponentFixture<CreatePaymentPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaymentPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
