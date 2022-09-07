import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee09ContractComponent } from './create-employee09-contract.component';

describe('CreateEmployee09ContractComponent', () => {
  let component: CreateEmployee09ContractComponent;
  let fixture: ComponentFixture<CreateEmployee09ContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee09ContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee09ContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
