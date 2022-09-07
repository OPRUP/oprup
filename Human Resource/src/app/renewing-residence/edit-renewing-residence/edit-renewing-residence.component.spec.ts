import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRenewingResidenceComponent } from './edit-renewing-residence.component';

describe('EditRenewingResidenceComponent', () => {
  let component: EditRenewingResidenceComponent;
  let fixture: ComponentFixture<EditRenewingResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRenewingResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRenewingResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
