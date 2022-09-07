import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintVacationComponent } from './print-vacation.component';

describe('PrintVacationComponent', () => {
  let component: PrintVacationComponent;
  let fixture: ComponentFixture<PrintVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
