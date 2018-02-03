import { TestBed, inject } from '@angular/core/testing';

import { ChinookService } from './chinook.service';

describe('ChinookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChinookService]
    });
  });

  it('should be created', inject([ChinookService], (service: ChinookService) => {
    expect(service).toBeTruthy();
  }));
});
