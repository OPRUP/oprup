/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralJobService } from './central-job.service';

describe('Service: CentralJob', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralJobService]
    });
  });

  it('should ...', inject([CentralJobService], (service: CentralJobService) => {
    expect(service).toBeTruthy();
  }));
});
