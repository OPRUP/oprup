import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSiteVisitsComponent } from './delete-site-visits.component';

describe('DeleteSiteVisitsComponent', () => {
  let component: DeleteSiteVisitsComponent;
  let fixture: ComponentFixture<DeleteSiteVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSiteVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSiteVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
