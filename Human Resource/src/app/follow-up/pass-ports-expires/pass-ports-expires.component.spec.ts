import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPortsExpiresComponent } from './pass-ports-expires.component';

describe('PassPortsExpiresComponent', () => {
  let component: PassPortsExpiresComponent;
  let fixture: ComponentFixture<PassPortsExpiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassPortsExpiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassPortsExpiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
