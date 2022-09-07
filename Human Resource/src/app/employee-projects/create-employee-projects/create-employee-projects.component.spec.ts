import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeProjectsComponent } from './create-employee-projects.component';

describe('CreateEmployeeProjectsComponent', () => {
  let component: CreateEmployeeProjectsComponent;
  let fixture: ComponentFixture<CreateEmployeeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
