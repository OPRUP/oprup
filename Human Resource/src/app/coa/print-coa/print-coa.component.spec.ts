import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCoaComponent } from './print-coa.component';

describe('PrintCoaComponent', () => {
  let component: PrintCoaComponent;
  let fixture: ComponentFixture<PrintCoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
