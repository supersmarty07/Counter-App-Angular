import { TestBed } from '@angular/core/testing';

import { PassCounterService } from './pass-counter.service';

describe('PassCounterService', () => {
  let service: PassCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
