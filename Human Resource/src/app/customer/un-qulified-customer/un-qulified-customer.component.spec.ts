import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnQulifiedCustomerComponent } from './un-qulified-customer.component';

describe('UnQulifiedCustomerComponent', () => {
  let component: UnQulifiedCustomerComponent;
  let fixture: ComponentFixture<UnQulifiedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnQulifiedCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnQulifiedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
