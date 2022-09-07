import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HokomiDetailsComponent } from './hokomi-details.component';

describe('HokomiDetailsComponent', () => {
  let component: HokomiDetailsComponent;
  let fixture: ComponentFixture<HokomiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HokomiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HokomiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
