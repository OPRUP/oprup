import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintJobTitlesComponent } from './print-job-titles.component';

describe('PrintJobTitlesComponent', () => {
  let component: PrintJobTitlesComponent;
  let fixture: ComponentFixture<PrintJobTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintJobTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintJobTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
