/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlipService } from './slip.service';

describe('Service: Slip', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlipService]
    });
  });

  it('should ...', inject([SlipService], (service: SlipService) => {
    expect(service).toBeTruthy();
  }));
});
