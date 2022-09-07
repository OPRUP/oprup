import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee11EmployeedInformationComponent } from './create-employee11-employeed-information.component';

describe('CreateEmployee11EmployeedInformationComponent', () => {
  let component: CreateEmployee11EmployeedInformationComponent;
  let fixture: ComponentFixture<CreateEmployee11EmployeedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee11EmployeedInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee11EmployeedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
