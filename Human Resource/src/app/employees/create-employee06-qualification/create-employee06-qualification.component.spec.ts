import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee06QualificationComponent } from './create-employee06-qualification.component';

describe('CreateEmployee06QualificationComponent', () => {
  let component: CreateEmployee06QualificationComponent;
  let fixture: ComponentFixture<CreateEmployee06QualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee06QualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee06QualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
