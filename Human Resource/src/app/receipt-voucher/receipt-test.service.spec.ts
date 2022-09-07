import { TestBed } from '@angular/core/testing';

import { ReceiptTestService } from './receipt-test.service';

describe('ReceiptTestService', () => {
  let service: ReceiptTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
