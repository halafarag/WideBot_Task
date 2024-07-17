import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthorized = inject(AuthService);
  return isAuthorized.isUserLog ? true : router.navigate(['/login']);
};
