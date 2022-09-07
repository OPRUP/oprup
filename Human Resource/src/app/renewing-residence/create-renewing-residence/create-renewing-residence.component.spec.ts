import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRenewingResidenceComponent } from './create-renewing-residence.component';

describe('CreateRenewingResidenceComponent', () => {
  let component: CreateRenewingResidenceComponent;
  let fixture: ComponentFixture<CreateRenewingResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRenewingResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRenewingResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
