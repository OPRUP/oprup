/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransportationService } from './Transportation.service';

describe('Service: Transportation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportationService]
    });
  });

  it('should ...', inject([TransportationService], (service: TransportationService) => {
    expect(service).toBeTruthy();
  }));
});
