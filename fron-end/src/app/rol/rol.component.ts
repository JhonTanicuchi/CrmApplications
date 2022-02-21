import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  rolActual: Rol = new Rol(0,"","",false);

  listadoRoles: Rol[] = [];

  constructor(
    private rolService: RolService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  save(rol: Rol):void
  {
    console.log("ingresando al método save")
    this.rolService.save(rol).subscribe(
      (respuesta) => {
        this.rolActual = new Rol(0,"","",false);
        this.findAll();
      }
    );
  }

  findAll():void
  {
    this.rolService.findAll().subscribe(
      respuesta => this.listadoRoles = respuesta
    );
  }

  seleccionarRol(rol: Rol):void
  {
    this.rolActual = rol;
  }

  limpiarForm(){
    this.rolActual = new Rol(0,"","",false);
  }

  deleteById(id: number):void
  {
    this.rolService.deleteById(id).subscribe(
      () => {
        this.listadoRoles = this.listadoRoles
        .filter( item => item.rolId != id);
        this.rolActual = new Rol(0,"","",false);
      }

    );
  }
}
