import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from '../services/login.service';

export const AuthGuard = () => {
  const router = inject(Router);
  // const authService = inject(LoginService);

  // if (localStorage.getItem('token')) {
  //   return true;
  // }
  // router.navigate(['/'])
  // return false;

  return localStorage.getItem('token') ? true : router.navigate(['/']);
  // return false;
};
