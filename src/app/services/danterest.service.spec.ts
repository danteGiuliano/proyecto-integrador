import { TestBed } from '@angular/core/testing';

import { DanterestService } from './danterest.service';

describe('DanterestService', () => {
  let service: DanterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
