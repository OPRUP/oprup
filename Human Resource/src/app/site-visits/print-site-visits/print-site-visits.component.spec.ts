import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSiteVisitsComponent } from './print-site-visits.component';

describe('PrintSiteVisitsComponent', () => {
  let component: PrintSiteVisitsComponent;
  let fixture: ComponentFixture<PrintSiteVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSiteVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSiteVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
