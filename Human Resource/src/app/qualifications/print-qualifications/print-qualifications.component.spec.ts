import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQualificationsComponent } from './print-qualifications.component';

describe('PrintQualificationsComponent', () => {
  let component: PrintQualificationsComponent;
  let fixture: ComponentFixture<PrintQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintQualificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
