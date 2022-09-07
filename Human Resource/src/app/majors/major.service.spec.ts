/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MajorService } from './major.service';

describe('Service: Major', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorService]
    });
  });

  it('should ...', inject([MajorService], (service: MajorService) => {
    expect(service).toBeTruthy();
  }));
});
