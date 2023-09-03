import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUrl = state.url;
    const isLoggedIn = this.authService.isLoggedIn;
    const AUTH_URLS = ['/auth/login', '/auth/register'];

    if (AUTH_URLS.includes(currentUrl) && isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
      return false;
    }

    if (!AUTH_URLS.includes(currentUrl) && !isLoggedIn()) {
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    return true;
  }
}
