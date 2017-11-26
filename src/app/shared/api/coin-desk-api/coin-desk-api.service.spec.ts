import { TestBed, inject } from '@angular/core/testing';

import { CoinDeskApiService } from './coin-desk-api.service';

describe('CoinDeskApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinDeskApiService]
    });
  });

  it('should be created', inject([CoinDeskApiService], (service: CoinDeskApiService) => {
    expect(service).toBeTruthy();
  }));
});
