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
      headers: new HttpHeaders({ //encabezado le indicamos el envio de autorizacion
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
          let data = String(response.headers.get('Authorization'));
          data = data.replace('Bearer ', '');
          data = data.split('.')[1];
          data = atob(data);
          interface MyObj {
            sub: string;
            exp: number;
            nombre: string;
            rol: string;
          }
          let obj: MyObj = JSON.parse(data);
          console.log("Bienvenido "+obj.nombre);
          sessionStorage.setItem('nombre', obj.nombre);
          this.router.navigate(['/home']);
        }
      });
  }
}
