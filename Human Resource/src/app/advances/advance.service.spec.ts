/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdvanceService } from './advance.service';

describe('Service: Advance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvanceService]
    });
  });

  it('should ...', inject([AdvanceService], (service: AdvanceService) => {
    expect(service).toBeTruthy();
  }));
});
