import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCompaniesComponent } from './print-companies.component';

describe('PrintCompaniesComponent', () => {
  let component: PrintCompaniesComponent;
  let fixture: ComponentFixture<PrintCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
