import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiteVisitsComponent } from './create-site-visits.component';

describe('CreateSiteVisitsComponent', () => {
  let component: CreateSiteVisitsComponent;
  let fixture: ComponentFixture<CreateSiteVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiteVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiteVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
