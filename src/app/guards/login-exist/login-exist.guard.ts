import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginExistGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.evaluateLogInExist(next);
  }

  /**
   * Evaluate if exist session
   */
  private async evaluateLogInExist(route: ActivatedRouteSnapshot) {
    const caseLoginExist = route.data.caseLoginExist || 1;
    const token = this.storageService.getToken();
    const loginExist = token != null;
    let response: boolean | UrlTree = true;

    switch (caseLoginExist) {
      case 1:
        if (!loginExist) {
          response = this.goToLogIn();
        }
        break;
      case 2:
        if (loginExist) {
          response = this.goToHome();
        }
        break;
    }
    return response;
  }

  /**
   * Prepare redirect to login section
   */
  private goToLogIn() {
    return this.router.parseUrl('login');
  }

  /**
   * Prepare redirect to home section
   */
  private goToHome() {
    return this.router.parseUrl('/');
  }

}
