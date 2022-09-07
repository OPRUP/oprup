import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingFullContentComponent } from './setting-full-content.component';

describe('SettingFullContentComponent', () => {
  let component: SettingFullContentComponent;
  let fixture: ComponentFixture<SettingFullContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingFullContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingFullContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
