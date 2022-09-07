import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRenewingResidenceComponent } from './print-renewing-residence.component';

describe('PrintRenewingResidenceComponent', () => {
  let component: PrintRenewingResidenceComponent;
  let fixture: ComponentFixture<PrintRenewingResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintRenewingResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRenewingResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
