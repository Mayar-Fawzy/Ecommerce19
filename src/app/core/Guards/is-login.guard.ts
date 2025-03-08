import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);
  const _Router = inject(Router); // Move this outside the condition

  if (isPlatformBrowser(_PLATFORM_ID)) {
    const userToken = localStorage.getItem('userToken');

    if (userToken) { // Check if token exists
      _Router.navigate(['/home']);
      return false; // Prevent access to login/signup page
    }
    return true; // Allow access if not logged in
  }

  return true; // Default case (server-side rendering)
};
