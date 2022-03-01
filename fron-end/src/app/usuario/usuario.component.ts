import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Permiso } from '../permiso/permiso';
import { PermisoService } from '../permiso/permiso.service';
import { Persona } from '../persona/persona';
import { PersonaService } from '../persona/persona.service';
import { Rol } from '../rol/rol';
import { RolService } from '../rol/rol.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarioActual: Usuario = new Usuario(0, '', '', 0, 0, false);

  listadoUsuarios: Usuario[] = [];


  personaDatos: Persona;
  permisos!: Observable<Permiso[]>;
  roles!: Observable<Rol[]>;
  personas!: Observable<Persona[]>;

  constructor(
    private usuarioService: UsuarioService,
    private permisoService: PermisoService,
    private rolService: RolService,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.permisos = this.permisoService.findAll();
    this.roles = this.rolService.findAll();
    this.personas = this.personaService.findAll();


  }

  save(usuario: Usuario): void {
    console.log('ingresando al método save');
    this.usuarioService.save(usuario).subscribe((respuesta) => {
      this.usuarioActual = new Usuario(0, '', '', 0, 0, false);
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
    console.log(this.usuarioActual);
  }

  limpiarForm() {
    this.usuarioActual = new Usuario(0, '', '', 0, 0, false);
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
      this.usuarioActual = new Usuario(0, '', '', 0, 0, false);
    });
  }

  flag = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  limpiarPersona() {
    this.usuarioActual.personaId = 0;
  }

  iconDelete = false;

  iconDeletFalse() {
    this.iconDelete = false;
  }

  iconDeletTrue() {
    this.iconDelete = true;
  }

  counter(i: number) {
    return new Array(i);
  }

  buscarPersona(id: number) {
    this.personaService.buscarId(id).subscribe((respuesta) => {
      console.log(respuesta);
      this.personaDatos = respuesta;
    });
  }
}
