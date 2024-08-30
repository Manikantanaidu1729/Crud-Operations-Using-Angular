import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from './app.component';

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):boolean  => {
  let r:any;
  let app = new AppComponent(r);
  return false;
};