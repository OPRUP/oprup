import { TestBed } from '@angular/core/testing';

import { ReportNavService } from './report-nav.service';

describe('ReportNavService', () => {
  let service: ReportNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
