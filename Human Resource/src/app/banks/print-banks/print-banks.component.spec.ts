import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBanksComponent } from './print-banks.component';

describe('PrintBanksComponent', () => {
  let component: PrintBanksComponent;
  let fixture: ComponentFixture<PrintBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
