import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SomeInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // const request = req.clone({ params: req.params.set('x','5')});
    const request = req.clone();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401)
        return throwError(() => () => 'redirrectToLogin')
        return throwError(() => () => 'another error')
    }));
    return next.handle(req);
  }
}
