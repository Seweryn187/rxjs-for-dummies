import { TestBed } from '@angular/core/testing';

import { MockRequestsService } from './mock-requests.service';

describe('MockRequestsService', () => {
  let service: MockRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
