import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentPermissionComponent } from './edit-payment-permission.component';

describe('EditPaymentPermissionComponent', () => {
  let component: EditPaymentPermissionComponent;
  let fixture: ComponentFixture<EditPaymentPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
