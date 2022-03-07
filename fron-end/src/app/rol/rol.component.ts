import { Component, OnInit } from '@angular/core';
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
  iconDelete: boolean;

  constructor(private rolService: RolService) {}

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

  RolActivos(): number {
    var totalActivos = 0;
    this.listadoRoles.forEach((rol) => {
      if (rol.estado == true) {
        totalActivos++;
      }
    });
    return totalActivos;
  }


  deleteById(id: number): void {
    this.rolService.deleteById(id).subscribe(() => {
      this.listadoRoles = this.listadoRoles.filter((item) => item.rolId != id);
      this.rolActual = new Rol(0, '', []);
    });
  }

  flag = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  iconDeletFalse() {
    this.iconDelete = false;
  }

  iconDeletTrue() {
    this.iconDelete = true;
  }

  addPermiso():void{
    this.rolActual.rolId = this.rolActual.rolId + 1;
  }

  deletePermiso():void{
    this.rolActual.rolId = this.rolActual.rolId - 1;
  } 

  counter(i: number) {
    return new Array(i);
  }

 
}


//---------------------------------codigo usuarios----------------------------
/*import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  usuarioActual: Usuario = new Usuario(0, '', '', '', false, 0);

  listadoUsuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.findAll();
  }

  save(usuario: Usuario): void {
    console.log('ingresando al método save');
    this.usuarioService.save(usuario).subscribe((respuesta) => {
      this.usuarioActual = new Usuario(0, '', '', '', false, 0);
      this.findAll();
    });
  }

  findAll(): void {
    this.usuarioService
      .findAll()
      .subscribe((respuesta) => (this.listadoUsuarios = respuesta));
  }

  seleccionarUsuario(usuario: Usuario): void {
    this.usuarioActual = usuario;
  }

  limpiarForm() {
    this.usuarioActual = new Usuario(0, '', '', '', false, 0);
  }

  UsuariosActivos(): number {
    var totalActivos = 0;
    this.listadoUsuarios.forEach((usuario) => {
      if (usuario.estado == true) {
        totalActivos++;
      }
    });
    return totalActivos;
  }

  deleteById(id: number): void {
    this.usuarioService.deleteById(id).subscribe(() => {
      this.listadoUsuarios = this.listadoUsuarios.filter(
        (item) => item.usuarioId != id
      );
      this.usuarioActual = new Usuario(0, '', '', '', false, 0);
    });
  }

  flag = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  /*  limpiarPersona(){
    this.usuarioActual.personaId = 0;
  } */

  /*iconDelete = false;

  iconDeletFalse() {
    this.iconDelete = false;
  }

  iconDeletTrue() {
    this.iconDelete = true;
  }*/

  /* addPermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId + 1;
  }

  deletePermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId - 1;
  } */

  /*counter(i: number) {
    return new Array(i);
  }

  CambiarPassword() {}
}*/
