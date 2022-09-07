/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PurchasingService } from './purchasing.service';

describe('Service: Purchasing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchasingService]
    });
  });

  it('should ...', inject([PurchasingService], (service: PurchasingService) => {
    expect(service).toBeTruthy();
  }));
});
