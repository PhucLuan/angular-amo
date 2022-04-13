import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,Router
} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ) {}

  public isAuthenticated: boolean;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((auth) => (this.isAuthenticated = auth));

    if (this.isAuthenticated) return true;
    this.router.navigate(['/']);
    return false;
  }
}
