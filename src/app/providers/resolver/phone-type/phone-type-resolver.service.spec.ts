import { TestBed } from '@angular/core/testing';

import { PhoneTypeResolverService } from './phone-type-resolver.service';

describe('PhoneTypeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneTypeResolverService = TestBed.get(PhoneTypeResolverService);
    expect(service).toBeTruthy();
  });
});
