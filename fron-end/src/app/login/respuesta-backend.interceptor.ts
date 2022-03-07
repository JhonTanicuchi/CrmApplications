import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RespuestaBackendInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( //pipe indicamos q va hacer cuando reciba la respuesta
      catchError((error) => { //captura el error de respuesta
        sessionStorage.setItem('ultimoError', error.status);
        this.router.navigate(['/alerta']);
        return throwError(() => error);
      })
    );
  }
}
