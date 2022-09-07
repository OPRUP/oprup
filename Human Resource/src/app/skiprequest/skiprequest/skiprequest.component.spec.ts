import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiprequestComponent } from './skiprequest.component';

describe('SkiprequestComponent', () => {
  let component: SkiprequestComponent;
  let fixture: ComponentFixture<SkiprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
