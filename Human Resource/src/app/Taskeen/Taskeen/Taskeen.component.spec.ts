/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskeenComponent } from './Taskeen.component';

describe('TaskeenComponent', () => {
  let component: TaskeenComponent;
  let fixture: ComponentFixture<TaskeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
