import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCentralJobsComponent } from './print-central-jobs.component';

describe('PrintCentralJobsComponent', () => {
  let component: PrintCentralJobsComponent;
  let fixture: ComponentFixture<PrintCentralJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCentralJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCentralJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
