import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintVisaComponent } from './print-visa.component';

describe('PrintVisaComponent', () => {
  let component: PrintVisaComponent;
  let fixture: ComponentFixture<PrintVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
