import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisaComponent } from './update-visa.component';

describe('UpdateVisaComponent', () => {
  let component: UpdateVisaComponent;
  let fixture: ComponentFixture<UpdateVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
