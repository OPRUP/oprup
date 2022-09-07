import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInsurancesCompaniesComponent } from './print-insurances-companies.component';

describe('PrintInsurancesCompaniesComponent', () => {
  let component: PrintInsurancesCompaniesComponent;
  let fixture: ComponentFixture<PrintInsurancesCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintInsurancesCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintInsurancesCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
