import { TestBed } from '@angular/core/testing';

import { AutorizacionService } from './autorizacion.service';

describe('AutorizacionService', () => {
  let service: AutorizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
