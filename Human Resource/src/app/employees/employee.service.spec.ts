/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('Service: Employee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });
  });

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
// describe('Service: Employee03Document', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [Employee03DocumentService]
//     });
//   });

//   it('should ...', inject([Employee03DocumentService], (service: Employee03DocumentService) => {
//     expect(service).toBeTruthy();
//   }));
// });
//
