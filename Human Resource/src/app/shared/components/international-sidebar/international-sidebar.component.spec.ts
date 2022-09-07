import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalSidebarComponent } from './international-sidebar.component';

describe('InternationalSidebarComponent', () => {
  let component: InternationalSidebarComponent;
  let fixture: ComponentFixture<InternationalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
