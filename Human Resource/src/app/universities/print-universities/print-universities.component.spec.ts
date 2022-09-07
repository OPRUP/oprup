import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintUniversitiesComponent } from './print-universities.component';

describe('PrintUniversitiesComponent', () => {
  let component: PrintUniversitiesComponent;
  let fixture: ComponentFixture<PrintUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintUniversitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
