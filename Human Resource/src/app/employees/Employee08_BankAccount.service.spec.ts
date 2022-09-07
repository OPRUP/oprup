/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Employee08_BankAccountService } from './Employee08_BankAccount.service';

describe('Service: Employee08_BankAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee08_BankAccountService]
    });
  });

  it('should ...', inject([Employee08_BankAccountService], (service: Employee08_BankAccountService) => {
    expect(service).toBeTruthy();
  }));
});
