import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecruitmentCompanyComponent } from './delete-recruitment-company.component';

describe('DeleteRecruitmentCompanyComponent', () => {
  let component: DeleteRecruitmentCompanyComponent;
  let fixture: ComponentFixture<DeleteRecruitmentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecruitmentCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecruitmentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
