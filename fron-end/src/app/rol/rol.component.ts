import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  listadoRoles: Rol[] = [];
  listadoPermisos: Permiso[] = [];

  permisos!: Observable<Permiso[]>;

  rolActual: Rol = new Rol(0, '', this.listadoPermisos);

  rolDatos: Rol = new Rol(0, '', this.listadoPermisos);
  permisoDatos: Permiso = new Permiso(0, '', new Date(), new Date(), true);

  constructor(
    private rolService: RolService,
    private permisoService: PermisoService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.permisos = this.permisoService.findAll();
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

  seleccionarPermisosDatos(rol: Rol) {
    this.permisoService.findByRolId(rol.rolId).subscribe((respuesta) => {
      console.log(respuesta);
      respuesta.forEach((permiso) => {
        this.listadoPermisos.push(permiso);
      });
    });
  }

  limpiarPermiso() {
    this.permisoDatos = new Permiso(0, '', new Date(), new Date(), true);

    for (let i = this.listadoPermisos.length; i > 0; i--) {
      this.listadoPermisos.pop();
    }
    console.log(this.listadoPermisos);
  }
}
