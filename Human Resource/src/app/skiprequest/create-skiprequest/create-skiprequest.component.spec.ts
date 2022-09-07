import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkiprequestComponent } from './create-skiprequest.component';

describe('CreateSkiprequestComponent', () => {
  let component: CreateSkiprequestComponent;
  let fixture: ComponentFixture<CreateSkiprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkiprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkiprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
