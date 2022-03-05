import { Component, OnInit } from '@angular/core';
import { Permiso } from './permiso';
import { PermisoService } from './permiso.service';



@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css']
})
export class PermisoComponent implements OnInit {


  permisoActual: Permiso = new Permiso(0, "", new Date, new Date, true );

  listadoPermisos: Permiso[] = [];
 
  constructor(
    private permisoService: PermisoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  save(permiso: Permiso):void
  {
    console.log("ingresando al método save")
    this.permisoService.save(permiso).subscribe(
      (respuesta) => {
        this.permisoActual = new Permiso(0, "", new Date, new Date, true );
        this.findAll();
      }
    );
  }
  findAll():void
  {
    this.permisoService.findAll().subscribe(
      respuesta => this.listadoPermisos = respuesta
    );
  }

  seleccionarPermiso(permiso: Permiso):void
  {
    this.permisoActual = permiso;
  }

  limpiarForm(){
    this.permisoActual = new Permiso(0, "", new Date, new Date, true );
  }


  deleteById(id: number):void
  {
    this.permisoService.deleteById(id).subscribe(
      () => {
        this.listadoPermisos = this.listadoPermisos
        .filter( item => item.permisoId != id);
        this.permisoActual = new Permiso(0, "", new Date, new Date, true );
      }

    );
  }

}
