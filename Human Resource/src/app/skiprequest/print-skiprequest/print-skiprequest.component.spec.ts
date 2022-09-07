import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSkiprequestComponent } from './print-skiprequest.component';

describe('PrintSkiprequestComponent', () => {
  let component: PrintSkiprequestComponent;
  let fixture: ComponentFixture<PrintSkiprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSkiprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSkiprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
