/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BbbbService } from './bbbb.service';

describe('Service: Bbbb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BbbbService]
    });
  });

  it('should ...', inject([BbbbService], (service: BbbbService) => {
    expect(service).toBeTruthy();
  }));
});
