import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintExtensionComponent } from './print-extension.component';

describe('PrintExtensionComponent', () => {
  let component: PrintExtensionComponent;
  let fixture: ComponentFixture<PrintExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
