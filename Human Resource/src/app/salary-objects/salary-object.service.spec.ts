/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalaryObjectService } from './salary-object.service';

describe('Service: SalaryObject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryObjectService]
    });
  });

  it('should ...', inject([SalaryObjectService], (service: SalaryObjectService) => {
    expect(service).toBeTruthy();
  }));
});
