import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion(credenciales: any): void {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Basic ' + btoa(credenciales.username + ':' + credenciales.password),
      }),
      observe: 'response' as 'body',
    };

    this.http
      .post<HttpResponse<any>>('http://localhost:8080/login', {}, httpOptions)
      .subscribe((response: HttpResponse<any>) => {
        if (response.headers.get('Authorization') != null) {
          sessionStorage.setItem(
            'crm_token',
            String(response.headers.get('Authorization'))
          );
          sessionStorage.setItem('username', credenciales.username);
          this.router.navigate(['/home']);
        }
      });
  }
}
