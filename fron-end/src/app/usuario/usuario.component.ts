import { Component, OnInit } from '@angular/core';
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

  iconDelete = false;

  iconDeletFalse() {
    this.iconDelete = false;
  }

  iconDeletTrue() {
    this.iconDelete = true;
  }

  /* addPermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId + 1;
  }

  deletePermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId - 1;
  } */

  counter(i: number) {
    return new Array(i);
  }

  CambiarPassword() {}
}
