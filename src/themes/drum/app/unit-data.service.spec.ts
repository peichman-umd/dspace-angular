import { TestBed } from '@angular/core/testing';

import { UnitDataService } from './core/eperson/unit-data.service';

describe('UnitDataService', () => {
  let service: UnitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
