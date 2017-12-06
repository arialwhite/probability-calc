import { TestBed, inject } from '@angular/core/testing';

import { AlphaVantageApiService } from './alpha-vantage-api.service';

describe('AlphaVantageApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphaVantageApiService]
    });
  });

  it('should be created', inject([AlphaVantageApiService], (service: AlphaVantageApiService) => {
    expect(service).toBeTruthy();
  }));
});
