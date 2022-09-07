import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVisaComponent } from './delete-visa.component';

describe('DeleteVisaComponent', () => {
  let component: DeleteVisaComponent;
  let fixture: ComponentFixture<DeleteVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
