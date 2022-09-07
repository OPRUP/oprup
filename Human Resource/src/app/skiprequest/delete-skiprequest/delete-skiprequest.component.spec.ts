import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSkiprequestComponent } from './delete-skiprequest.component';

describe('DeleteSkiprequestComponent', () => {
  let component: DeleteSkiprequestComponent;
  let fixture: ComponentFixture<DeleteSkiprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSkiprequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSkiprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
