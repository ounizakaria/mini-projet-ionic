import { TestBed } from '@angular/core/testing';

import { ConsapiService } from './consapi.service';

describe('ConsapiService', () => {
  let service: ConsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
