import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._authService.isAuth();
  }  

  // canDeactivate 
  // проверить идет ли редактирование страницы, 
  // и если пользователь хочет перйети на другой стейт 
  // - спросить о сохранеии результатов работы

  // canLoad
  // как canCativate но
  // работает для ленивой загрузки

  // Resolve
  // не позволяет инициализировать стетйт
  // до того как не будут получены какие-то данные
}
