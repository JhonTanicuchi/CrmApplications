import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  credenciales = {  //es un objeto vacio sin username ni password
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  iniciarSesion(): void { //va a llamar un servicio
    this.loginService.iniciarSesion(this.credenciales); //llama credenciales
  }
}
