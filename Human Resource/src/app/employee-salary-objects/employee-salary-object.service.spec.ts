/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeSalaryObjectService } from './employee-salary-object.service';

describe('Service: EmployeeSalaryObject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeSalaryObjectService]
    });
  });

  it('should ...', inject([EmployeeSalaryObjectService], (service: EmployeeSalaryObjectService) => {
    expect(service).toBeTruthy();
  }));
});
