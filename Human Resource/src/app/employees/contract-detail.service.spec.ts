/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContractDetailService } from './contract-detail.service';

describe('Service: ContractDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractDetailService]
    });
  });

  it('should ...', inject([ContractDetailService], (service: ContractDetailService) => {
    expect(service).toBeTruthy();
  }));
});
