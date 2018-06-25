import { TestBed, inject } from '@angular/core/testing';

import { FrecuenciesService } from './frecuencies.service';

describe('FrecuenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrecuenciesService]
    });
  });

  it('should be created', inject([FrecuenciesService], (service: FrecuenciesService) => {
    expect(service).toBeTruthy();
  }));
});
