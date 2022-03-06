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
})
export class UsuarioComponent implements OnInit {
  personaDatos: Persona = new Persona(0,"","","","","");

  usuarioActual: Usuario = new Usuario(
    0,
    '',
    '',
    '',
    0,
    this.personaDatos,
    true
  );

  listadoUsuarios: Usuario[] = [];

  rolDatos!: Rol;
  permisosDatos!: Observable<Permiso[]>;

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

  restrictionCredenciales = false;
  restrictionRol = false;
  restrictionPersona = false;

  registroCredenciales = false;
  registroRol = false;
  registroPersona = false;

  agregarCredenciales = false;
  agregarRol = false;
  agregarPersona = false;

  seleccionarRol = false;
  seleccionarPersona = false;

  /* saveCredentials(usuario: Usuario): void {
    if (
      //this.usuarioActual.personaId <= 0 &&
      this.usuarioActual.username != '' &&
      this.usuarioActual.password != '' &&
      this.usuarioActual.rolId <= 0
    ) {
      this.cambiarFlag();
      this.save(usuario);
    } else {
      if (
        this.usuarioActual.username == '' ||
        this.usuarioActual.password == ''
      ) {
        console.log('Completa username');
        this.restrictionFlagCredenciales();
      }

      if (this.usuarioActual.rolId <= 0) {
        console.log('Completa rolId');
        this.restrictionFlagRol();
      }

      if (this.usuarioActual.personaID <= 0) {
        console.log('Completa persona');
        this.cambiarFlagPersona();

      }
    }
  } */

  restrictionFlagCredenciales() {
    this.restrictionCredenciales = true;
    this.agregarCredenciales = true;
    this.registroCredenciales = false;
  }

  restrictionFlagRol() {
    this.restrictionRol = true;
    this.agregarRol = true;
    this.registroRol = false;
    this.seleccionarRol = false;
  }

  restrictionFlagPersona() {
    this.restrictionPersona = true;
    this.agregarPersona = true;
    this.registroPersona = false;
  }

  agregarFlagCredenciales() {
    this.restrictionCredenciales = false;
    this.agregarCredenciales = true;
    this.registroCredenciales = true;
  }

  agregarFlagRol() {
    this.restrictionRol = false;
    this.agregarRol = true;
    this.registroRol = true;
  }

  agregarFlagPersona() {
    this.restrictionPersona = false;
    this.agregarPersona = true;
    this.registroPersona = true;
  }

  registroFlagCredenciales() {
    this.agregarCredenciales = true;
    this.registroCredenciales = true;
  }

  registroFlagRol() {
    this.agregarRol = true;
    this.registroRol = true;
  }
  seleccionarFlagRol() {
    this.seleccionarRol = !this.seleccionarRol;
    this.registroRol = !this.registroRol;
  }

  registroFlagPersona() {
    this.registroPersona = true;
  }

  seleccionarFlagPersona() {
    this.seleccionarPersona = !this.seleccionarPersona;
    this.registroPersona = !this.registroPersona;
  }

  save(usuario: Usuario): void {
    console.log('ingresando al método save');
    this.usuarioService.save(usuario).subscribe((respuesta) => {
      this.usuarioActual = new Usuario(
        0,
        '',
        '',
        '',
        0,
        this.personaDatos,
        true
      );
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
    this.usuarioActual = new Usuario(0, '', '', '', 0, this.personaDatos, true);
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
      this.usuarioActual = new Usuario(
        0,
        '',
        '',
        '',
        0,
        this.personaDatos,
        true
      );
    });
  }

  flag = false;
  flagPrincipal = false;

  flagPersonas = false;
  flagRoles = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  cerrarFlag() {
    this.flag = !this.flag;
    this.registroPersona = false;
    this.registroRol = false;
  }

  volverFlag() {
    this.flagPrincipal = !this.flagPrincipal;
  }

  limpiarPersona() {
    this.usuarioActual.persona = null;
  }

  view = false;

  viewEdit() {
    //deletfalse
    this.view = false;
  }

  viewCreate() {
    this.view = true;
  }

  counter(i: number) {
    return new Array(i);
  }

  buscarPersona(person: Persona) {
    this.personaService.buscarId(person[0].personaId).subscribe((respuesta) => {
      this.personaDatos = respuesta;
      console.log(respuesta);
    });
  }

  buscarPermisos(id: number) {
    this.permisosDatos = this.permisoService.findByRolId(id);
    //this.usuarioActual.rolId = this.rolDatos.rolId;
  }

  buscarRol(id: number) {
    this.rolService.findById(id).subscribe((respuesta) => {
      this.rolDatos = respuesta;
      console.log(respuesta);
    });
  }
}
