import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (sessionStorage.getItem('crm_token') != null) {
      let tokenRequest = request.clone({
        headers: request.headers.set(
          'Authorization',
          String(sessionStorage.getItem('crm_token'))
        ),
      });
      return next.handle(tokenRequest);
    }

    return next.handle(request);
  }
}
