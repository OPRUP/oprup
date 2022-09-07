/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee06_QualificationService } from './Employee06_Qualification.service';

describe('Service: Employee06_Qualification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee06_QualificationService]
    });
  });

  it('should ...', inject([Employee06_QualificationService], (service: Employee06_QualificationService) => {
    expect(service).toBeTruthy();
  }));
});
