import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecruitmentCompanyComponent } from './create-recruitment-company.component';

describe('CreateRecruitmentCompanyComponent', () => {
  let component: CreateRecruitmentCompanyComponent;
  let fixture: ComponentFixture<CreateRecruitmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecruitmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecruitmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
