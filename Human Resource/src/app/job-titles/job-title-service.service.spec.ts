/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobTitleService } from './job-title.service';

describe('Service: JobTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobTitleService]
    });
  });

  it('should ...', inject([JobTitleService], (service: JobTitleService) => {
    expect(service).toBeTruthy();
  }));
});
