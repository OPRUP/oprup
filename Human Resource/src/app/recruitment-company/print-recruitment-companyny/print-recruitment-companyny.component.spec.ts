import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRecruitmentCompanynyComponent } from './print-recruitment-companyny.component';

describe('PrintRecruitmentCompanynyComponent', () => {
  let component: PrintRecruitmentCompanynyComponent;
  let fixture: ComponentFixture<PrintRecruitmentCompanynyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintRecruitmentCompanynyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRecruitmentCompanynyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
