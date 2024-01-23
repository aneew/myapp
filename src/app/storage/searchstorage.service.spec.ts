import { TestBed } from '@angular/core/testing';

import { SearchstorageService } from './searchstorage.service';

describe('SearchstorageService', () => {
  let service: SearchstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
