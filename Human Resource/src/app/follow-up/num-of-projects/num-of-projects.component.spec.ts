import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfProjectsComponent } from './num-of-projects.component';

describe('NumOfProjectsComponent', () => {
  let component: NumOfProjectsComponent;
  let fixture: ComponentFixture<NumOfProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
