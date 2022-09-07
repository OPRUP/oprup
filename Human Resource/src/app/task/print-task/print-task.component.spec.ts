import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTaskComponent } from './print-task.component';

describe('PrintTaskComponent', () => {
  let component: PrintTaskComponent;
  let fixture: ComponentFixture<PrintTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
