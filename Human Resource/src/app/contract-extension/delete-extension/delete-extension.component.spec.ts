import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExtensionComponent } from './delete-extension.component';

describe('DeleteExtensionComponent', () => {
  let component: DeleteExtensionComponent;
  let fixture: ComponentFixture<DeleteExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
