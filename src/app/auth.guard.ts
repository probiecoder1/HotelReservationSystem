import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAdminLoggedIn = true;

  if (isAdminLoggedIn) {
    return true;
  } else {
    window.alert('Access denied. Admin not logged in.');
    return false;
  }
};
