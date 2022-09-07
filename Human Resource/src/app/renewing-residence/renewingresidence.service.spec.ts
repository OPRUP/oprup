import { TestBed } from '@angular/core/testing';

import { RenewingresidenceService } from './renewingresidence.service';

describe('RenewingresidenceService', () => {
  let service: RenewingresidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewingresidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
