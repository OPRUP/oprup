import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeProjectsComponent } from './delete-employee-projects.component';

describe('DeleteEmployeeProjectsComponent', () => {
  let component: DeleteEmployeeProjectsComponent;
  let fixture: ComponentFixture<DeleteEmployeeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
