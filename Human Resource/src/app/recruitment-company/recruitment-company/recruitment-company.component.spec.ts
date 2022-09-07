import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentCompanyComponent } from './recruitment-company.component';

describe('RecruitmentCompanyComponent', () => {
  let component: RecruitmentCompanyComponent;
  let fixture: ComponentFixture<RecruitmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
