import { TestBed } from '@angular/core/testing';

import { CreditNoticeService } from './credit-notice.service';

describe('CreditNoticeService', () => {
  let service: CreditNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
