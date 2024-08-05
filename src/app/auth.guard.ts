import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { HttpClient } from '@angular/common/http';
export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('seller')){
    return true;
  }
  return false;
};
//Need work on auth guard as in legacy authGuard is a class and we can add dependencies in it but the latest version has no authGuard