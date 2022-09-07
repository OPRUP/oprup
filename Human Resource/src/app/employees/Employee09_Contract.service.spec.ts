/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee09_ContractService } from './Employee09_Contract.service';

describe('Service: Employee09_Contract', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee09_ContractService]
    });
  });

  it('should ...', inject([Employee09_ContractService], (service: Employee09_ContractService) => {
    expect(service).toBeTruthy();
  }));
});
