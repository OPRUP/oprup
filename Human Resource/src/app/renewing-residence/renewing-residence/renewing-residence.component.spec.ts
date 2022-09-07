import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewingResidenceComponent } from './renewing-residence.component';

describe('RenewingResidenceComponent', () => {
  let component: RenewingResidenceComponent;
  let fixture: ComponentFixture<RenewingResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewingResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewingResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
