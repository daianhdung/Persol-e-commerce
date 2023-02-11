import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'app/services/storageService/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private cookieService: CookieService, public jwtHelper: JwtHelperService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.cookieService.get('jwtToken')){
          const token = this.cookieService.get('jwtToken')
          if(token){
            const decodedToken = this.jwtHelper.decodeToken(token)
            if(decodedToken.sub1.roleId === 1){
              return true
            }
          }
        }
      return false;
  }
  
}
