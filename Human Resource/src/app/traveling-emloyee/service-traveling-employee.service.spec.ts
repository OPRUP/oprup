import { TestBed } from '@angular/core/testing';

import { ServiceTravelingEmployeeService } from './service-traveling-employee.service';

describe('ServiceTravelingEmployeeService', () => {
  let service: ServiceTravelingEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTravelingEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
