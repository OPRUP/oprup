import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkiprequestComponent } from './edit-skiprequest.component';

describe('EditSkiprequestComponent', () => {
  let component: EditSkiprequestComponent;
  let fixture: ComponentFixture<EditSkiprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSkiprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkiprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
