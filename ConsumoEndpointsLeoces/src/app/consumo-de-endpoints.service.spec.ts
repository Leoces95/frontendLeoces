import { TestBed } from '@angular/core/testing';

import { ConsumoDeEndpointsService } from './consumo-de-endpoints.service';

describe('ConsumoDeEndpointsService', () => {
  let service: ConsumoDeEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoDeEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
