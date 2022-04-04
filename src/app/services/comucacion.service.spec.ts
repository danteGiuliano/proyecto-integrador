import { TestBed } from '@angular/core/testing';

import { ComucacionService } from './comucacion.service';

describe('ComucacionService', () => {
  let service: ComucacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComucacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
