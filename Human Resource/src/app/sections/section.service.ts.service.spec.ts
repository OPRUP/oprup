/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Section.service.tsService } from './section.service.ts.service';

describe('Service: Section.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section.service.tsService]
    });
  });

  it('should ...', inject([Section.service.tsService], (service: Section.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
