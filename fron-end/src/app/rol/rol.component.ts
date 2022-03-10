import { DatePipe } from '@angular/common';
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

  rolActual: Rol = new Rol(0, '', this.listadoPermisos, null, '', true);

  permisoDatos: Permiso = new Permiso(0, '', null, '', true);

  constructor(
    private rolService: RolService,
    private permisoService: PermisoService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.permisos = this.permisoService.findAll();
  }

  formatDate(current_datetime: Date) {
    let formatted_date =
      current_datetime.getFullYear() +
      '-' +
      (current_datetime.getMonth() + 1) +
      '-' +
      current_datetime.getDate() +
      ' ' +
      current_datetime.getHours() +
      ':' +
      current_datetime.getMinutes() +
      ':' +
      current_datetime.getSeconds();
    return formatted_date;
  }

  save(rol: Rol): void {
    if (rol.fechaCreacion == null) {
      rol.fechaCreacion = this.formatDate(new Date());
    }
    rol.fechaModificacion = this.formatDate(new Date());
    console.log('ingresando al método save');
    console.log(rol);
    this.rolService.save(rol).subscribe((respuesta) => {
      this.rolActual = new Rol(0, '', [], null, '', true);
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
    this.rolActual = new Rol(0, '', [], null, '', true);
  }

  deleteById(id: number): void {
    this.rolService.deleteById(id).subscribe(() => {
      this.listadoRoles = this.listadoRoles.filter((item) => item.rolId != id);
      this.rolActual = new Rol(0, '', [], null, '', true);
    });
  }

  seleccionarRolDatos(rol: Rol) {
    this.permisoService.findByRolId(rol.rolId).subscribe((respuesta) => {
      console.log(respuesta);
      respuesta.forEach((permiso) => {
        this.listadoPermisos.push(permiso);
      });
    });
  }

  filtarPermisos() {
    this.permisos.subscribe((respuesta) => {
      respuesta.forEach((permiso) => {
        var elementoPermisos = 'permiso' + permiso.permisoId;
        this.listadoPermisos.forEach((permisolist) => {
          var elementoPermisoslist = 'permiso' + permisolist.permisoId;
         
          if (elementoPermisos == elementoPermisoslist) {
            var elementPermiso = document.getElementById(
              'permiso' + permiso.permisoId
            );
            elementPermiso.classList.add('hidden');
          }
        });
      });
    });
  }

  restaurarPermisos() {
    this.permisos.subscribe((respuesta) => {
      respuesta.forEach((permiso) => {
        if (permiso.estado == true) {
          var elementPermiso = document.getElementById('permiso' + permiso.permisoId);
          elementPermiso.classList.remove('hidden');
        }
      });
    });
  }

  ocultarPermiso(id: string) {
    console.log(id);
    var elementPermiso = document.getElementById(id);
    elementPermiso.classList.add('hidden');
  }

  mostrarPermiso(id: string) {
    console.log(id);
    var elementPermiso = document.getElementById(id);
    elementPermiso.classList.remove('hidden');
  }

  agregarPermiso(permiso: Permiso) {
    this.listadoPermisos.push(permiso);
    this.rolActual.permisos.push(permiso);
    console.log(this.listadoPermisos);
    console.log(this.rolActual);
  }

  eliminarPermiso(perm: Permiso) {
    this.mostrarPermiso('permiso' + perm.permisoId);
    this.listadoPermisos = this.listadoPermisos.filter(
      (permiso) => permiso.permisoId !== perm.permisoId
    );
    this.rolActual.permisos = this.rolActual.permisos.filter(
      (permiso) => permiso.permisoId !== perm.permisoId
    );
    console.log(this.listadoPermisos);
    console.log(this.rolActual);
  }

  limpiarPermiso() {
    this.permisoDatos = new Permiso(0, '', null, '', true);

    for (let i = this.listadoPermisos.length; i > 0; i--) {
      this.listadoPermisos.pop();
    }
    console.log(this.listadoPermisos);
  }

  rolesActivos(): number {
    var totalActivos = 0;
    this.listadoRoles.forEach((rol) => {
      if (rol.estado == true) {
        totalActivos++;
      }
    });
    return totalActivos;
  }

  filtrarPermisosInactivos() {
    this.permisos.subscribe((respuesta) => {
      respuesta.forEach((permiso) => {
        if (permiso.estado == false) {
          var elementPermiso = document.getElementById('permiso' + permiso.permisoId);
          elementPermiso.classList.add('hidden');
        }
      });
    });
  }

  flag = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  view = false;

  viewEdit() {
    //deletfalse
    this.view = false;
  }

  viewCreate() {
    this.view = true;
  }

  /* viewPermisos = false;
  viewEstadistica = true;

  viewListPermisos() {
    this.viewPermisos = true;
    this.viewEstadistica = false;
  }

  quitViewPermiso() {
    this.viewEstadistica = true;
    this.viewPermisos = false;
  } */
}
