/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsuranceCompanyService } from './insurance-company.service';

describe('Service: InsuranceCompany', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsuranceCompanyService]
    });
  });

  it('should ...', inject([InsuranceCompanyService], (service: InsuranceCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
