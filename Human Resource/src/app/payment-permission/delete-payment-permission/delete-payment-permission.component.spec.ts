import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaymentPermissionComponent } from './delete-payment-permission.component';

describe('DeletePaymentPermissionComponent', () => {
  let component: DeletePaymentPermissionComponent;
  let fixture: ComponentFixture<DeletePaymentPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaymentPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaymentPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
