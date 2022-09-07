import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee07WorkExperienceComponent } from './create-employee07-work-experience.component';

describe('CreateEmployee07WorkExperienceComponent', () => {
  let component: CreateEmployee07WorkExperienceComponent;
  let fixture: ComponentFixture<CreateEmployee07WorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee07WorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee07WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
