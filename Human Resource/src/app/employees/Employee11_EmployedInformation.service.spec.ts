/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee11_EmployedInformationService } from './Employee11_EmployedInformation.service';

describe('Service: Employee11_EmployedInformation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee11_EmployedInformationService]
    });
  });

  it('should ...', inject([Employee11_EmployedInformationService], (service: Employee11_EmployedInformationService) => {
    expect(service).toBeTruthy();
  }));
});
