import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteVisitsComponent } from './edit-site-visits.component';

describe('EditSiteVisitsComponent', () => {
  let component: EditSiteVisitsComponent;
  let fixture: ComponentFixture<EditSiteVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSiteVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
