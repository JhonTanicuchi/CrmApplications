import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  seguimientoId: string;
  isSeguimiento: boolean = false;

  listSeguiminetos: number[];

  constructor() { }

  ngOnInit(): void {
    this.listSeguiminetos = [1,2,3,4,5,6,]
  }

}
