import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  credenciales = {
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  iniciarSesion(): void {
    this.loginService.iniciarSesion(this.credenciales);
  }
}
