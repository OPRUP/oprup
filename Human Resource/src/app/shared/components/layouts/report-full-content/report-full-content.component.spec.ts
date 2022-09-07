import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFullContentComponent } from './report-full-content.component';

describe('ReportFullContentComponent', () => {
  let component: ReportFullContentComponent;
  let fixture: ComponentFixture<ReportFullContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFullContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFullContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
