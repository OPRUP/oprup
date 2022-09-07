import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeProjectComponent } from './edit-employee-project.component';

describe('EditEmployeeProjectComponent', () => {
  let component: EditEmployeeProjectComponent;
  let fixture: ComponentFixture<EditEmployeeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
