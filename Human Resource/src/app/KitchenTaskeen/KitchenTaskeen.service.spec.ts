/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KitchenTaskeenService } from './KitchenTaskeen.service';

describe('Service: KitchenTaskeen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitchenTaskeenService]
    });
  });

  it('should ...', inject([KitchenTaskeenService], (service: KitchenTaskeenService) => {
    expect(service).toBeTruthy();
  }));
});
