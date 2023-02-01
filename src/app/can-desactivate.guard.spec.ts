import { TestBed } from '@angular/core/testing';

import { CanDesactivateGuard } from './can-desactivate.guard';

describe('CanDesactivateGuard', () => {
  let guard: CanDesactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDesactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
