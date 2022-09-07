import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMajorsComponent } from './print-majors.component';

describe('PrintMajorsComponent', () => {
  let component: PrintMajorsComponent;
  let fixture: ComponentFixture<PrintMajorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMajorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMajorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
