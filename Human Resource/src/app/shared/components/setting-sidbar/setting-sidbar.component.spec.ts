import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSidbarComponent } from './setting-sidbar.component';

describe('SettingSidbarComponent', () => {
  let component: SettingSidbarComponent;
  let fixture: ComponentFixture<SettingSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSidbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
