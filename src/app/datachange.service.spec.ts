import { TestBed } from '@angular/core/testing';

import { DatachangeService } from './datachange.service';

describe('DatachangeService', () => {
  let service: DatachangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatachangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
