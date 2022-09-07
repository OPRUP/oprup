import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEmployeeProjectsComponent } from './print-employee-projects.component';

describe('PrintEmployeeProjectsComponent', () => {
  let component: PrintEmployeeProjectsComponent;
  let fixture: ComponentFixture<PrintEmployeeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintEmployeeProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintEmployeeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
