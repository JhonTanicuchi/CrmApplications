import { Component, OnInit } from '@angular/core';
import { Permiso } from '../permiso/permiso';
import { PermisoService } from '../permiso/permiso.service';
import { Rol } from './rol';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent implements OnInit {
  rolActual: Rol = new Rol(0, '',[]);

  listadoRoles: Rol[] = [];
  listadoPermisos: Permiso[] = [];

  rolDatos: Rol = new Rol(0, '', this.listadoPermisos);
  permisoDatos: Permiso = new Permiso(0, '', new Date(), new Date(), true);

  constructor(
    private rolService: RolService,
    private permisoService: PermisoService

    ) {}

  ngOnInit(): void {
    this.findAll();
  }

  save(rol: Rol): void {
    console.log('ingresando al método save');
    this.rolService.save(rol).subscribe((respuesta) => {
      this.rolActual = new Rol(0, '', []);
      this.findAll();
    });
  }

  findAll(): void {
    this.rolService
      .findAll()
      .subscribe((respuesta) => (this.listadoRoles = respuesta));
  }

  seleccionarRol(rol: Rol): void {
    this.rolActual = rol;
  }

  limpiarForm() {
    this.rolActual = new Rol(0, '', []);
  }

  deleteById(id: number): void {
    this.rolService.deleteById(id).subscribe(() => {
      this.listadoRoles = this.listadoRoles.filter((item) => item.rolId != id);
      this.rolActual = new Rol(0, '', []);
    });
  }

}
