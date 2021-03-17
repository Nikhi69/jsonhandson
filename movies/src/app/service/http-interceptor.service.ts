import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username="Rakesh";
    let password="pook";
    let basicAuthenticationHeader ='Basic '+btoa(username+':'+password);

    request = request.clone({
      setHeaders:{
        Authorization:basicAuthenticationHeader
      }
    })
    return next.handle(request);
  }
}
