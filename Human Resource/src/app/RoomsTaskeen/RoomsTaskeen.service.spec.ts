/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomsTaskeenService } from './RoomsTaskeen.service';

describe('Service: RoomsTaskeen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomsTaskeenService]
    });
  });

  it('should ...', inject([RoomsTaskeenService], (service: RoomsTaskeenService) => {
    expect(service).toBeTruthy();
  }));
});
