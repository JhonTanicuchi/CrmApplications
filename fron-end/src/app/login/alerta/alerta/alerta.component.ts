import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
})
export class AlertaComponent implements OnInit {
  ultimoError = '';
  constructor() {}

  ngOnInit(): void {
    this.ultimoError = String(sessionStorage.getItem('ultimoError')); //mapea
  }
}
