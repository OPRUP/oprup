import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalFullContentComponent } from './international-full-content.component';

describe('InternationalFullContentComponent', () => {
  let component: InternationalFullContentComponent;
  let fixture: ComponentFixture<InternationalFullContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalFullContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalFullContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
