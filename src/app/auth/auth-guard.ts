import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('access_token'); // Coincide con tu LoginComponent

  if (token) {
    return true; // Hay token, puede pasar
  } else {
    // No hay token, redirigir
    router.navigate(['/acceso-denegado']);
    return false;
  }
};