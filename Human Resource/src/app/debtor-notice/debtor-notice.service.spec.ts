import { TestBed } from '@angular/core/testing';

import { DebtorNoticeService } from './debtor-notice.service';

describe('DebtorNoticeService', () => {
  let service: DebtorNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtorNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
