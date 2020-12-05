import { TestBed } from '@angular/core/testing';

import { ExchangeDataByGovService } from './exchange-data-by-gov.service';

describe('ExchangeDataByGovService', () => {
  let service: ExchangeDataByGovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeDataByGovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
