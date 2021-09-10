import { TestBed } from '@angular/core/testing';

import { EtesterdbService } from './etesterdb.service';

describe('EtesterdbService', () => {
  let service: EtesterdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtesterdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
