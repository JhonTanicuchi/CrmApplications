import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  nombreSession: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nombreSession = String(sessionStorage.getItem('nombre'));
  }

  enSesion(): boolean {
    if (sessionStorage.getItem('username') != null) return true;
    return false;
  }

  cerrarSesion(): void {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  inLogin(): boolean {
    if ('/login' != this.router.url) return true;
    return false;
  }
}
