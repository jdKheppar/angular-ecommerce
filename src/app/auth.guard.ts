import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router(); // Create a new instance of Router
  const isSellerAuthRoute = state.url.includes('/seller-auth');
  if (isSellerAuthRoute && localStorage.getItem('seller')) {
    router.navigate(['/seller-home']);
    return true;
  }
  if(localStorage.getItem('seller')){
    return true;
  }
  return false;
};
//Need work on auth guard as in legacy authGuard is a class and we can add dependencies in it but the latest version has no authGuard