import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecruitmentCompanynyComponent } from './edit-recruitment-companyny.component';

describe('EditRecruitmentCompanynyComponent', () => {
  let component: EditRecruitmentCompanynyComponent;
  let fixture: ComponentFixture<EditRecruitmentCompanynyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecruitmentCompanynyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecruitmentCompanynyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
