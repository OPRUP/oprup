import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRenewingResidenceComponent } from './delete-renewing-residence.component';

describe('DeleteRenewingResidenceComponent', () => {
  let component: DeleteRenewingResidenceComponent;
  let fixture: ComponentFixture<DeleteRenewingResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRenewingResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRenewingResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
