import { TestBed } from '@angular/core/testing';

import { SkiprequestService } from './skiprequest.service';

describe('SkiprequestService', () => {
  let service: SkiprequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiprequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
