import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSectionsComponent } from './print-sections.component';

describe('PrintSectionsComponent', () => {
  let component: PrintSectionsComponent;
  let fixture: ComponentFixture<PrintSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
