import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioActual: Usuario = new Usuario(0,"","",0,0,0,false);

  listadoUsuarios: Usuario[] = [];



  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.findAll();

  }

  save(usuario: Usuario):void
  {
    console.log("ingresando al método save")
    this.usuarioService.save(usuario).subscribe(
      (respuesta) => {
        this.usuarioActual = new Usuario(0,"","",0,0,0,false);
        this.findAll();
      }
    );
  }

  findAll():void
  {
    this.usuarioService.findAll().subscribe(
      respuesta => this.listadoUsuarios = respuesta
    );
  }

  seleccionarUsuario(usuario: Usuario):void
  {
    this.usuarioActual = usuario;
  }

  limpiarForm(){
    this.usuarioActual = new Usuario(0,"","",0,0,0,false);
  }

  UsuariosActivos():number
  {
    var totalActivos = 0;
    this.listadoUsuarios.forEach(usuario => {
      if(usuario.estado == true){
        totalActivos++;
      }
    });
    return totalActivos
  }


  deleteById(id: number):void
  {
    this.usuarioService.deleteById(id).subscribe(
      () => {
        this.listadoUsuarios = this.listadoUsuarios
        .filter( item => item.usuarioId != id);
        this.usuarioActual = new Usuario(0,"","",0,0,0,false);
      }

    );
  }

  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
  }

  addPermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId + 1;
  }

  deletePermiso():void{
    this.usuarioActual.permisoId = this.usuarioActual.permisoId - 1;
  }

  counter(i: number) {
    return new Array(i);
}

}
