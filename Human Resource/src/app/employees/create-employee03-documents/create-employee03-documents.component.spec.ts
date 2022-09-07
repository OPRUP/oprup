import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee03DocumentsComponent } from './create-employee03-documents.component';

describe('CreateEmployee03DocumentsComponent', () => {
  let component: CreateEmployee03DocumentsComponent;
  let fixture: ComponentFixture<CreateEmployee03DocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployee03DocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee03DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
