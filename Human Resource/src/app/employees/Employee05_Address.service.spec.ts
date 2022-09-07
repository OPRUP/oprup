/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee05_AddressService } from './Employee05_Address.service';

describe('Service: Employee05_Address', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee05_AddressService]
    });
  });

  it('should ...', inject([Employee05_AddressService], (service: Employee05_AddressService) => {
    expect(service).toBeTruthy();
  }));
});
