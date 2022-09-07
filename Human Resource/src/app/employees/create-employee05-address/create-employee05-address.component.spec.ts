import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee05AddressComponent } from './create-employee05-address.component';

describe('CreateEmployee05AddressComponent', () => {
  let component: CreateEmployee05AddressComponent;
  let fixture: ComponentFixture<CreateEmployee05AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee05AddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee05AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
