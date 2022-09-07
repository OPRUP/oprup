/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee03DocumentService } from './employee03Document.service';

describe('Service: Employee03Document', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee03DocumentService]
    });
  });

  it('should ...', inject([Employee03DocumentService], (service: Employee03DocumentService) => {
    expect(service).toBeTruthy();
  }));
});
