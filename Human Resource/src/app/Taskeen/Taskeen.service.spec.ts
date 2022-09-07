/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskeenService } from './Taskeen.service';

describe('Service: Taskeen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskeenService]
    });
  });

  it('should ...', inject([TaskeenService], (service: TaskeenService) => {
    expect(service).toBeTruthy();
  }));
});
