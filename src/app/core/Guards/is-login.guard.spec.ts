import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLoginGuard } from './is-login.guard';

describe('isLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
