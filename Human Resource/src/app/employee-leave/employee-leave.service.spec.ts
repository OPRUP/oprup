/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeLeaveService } from './employee-leave.service';

describe('Service: EmployeeLeave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeLeaveService]
    });
  });

  it('should ...', inject([EmployeeLeaveService], (service: EmployeeLeaveService) => {
    expect(service).toBeTruthy();
  }));
});
