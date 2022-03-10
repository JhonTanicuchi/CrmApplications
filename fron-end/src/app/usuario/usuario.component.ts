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
  listadoUsuarios: Usuario[] = [];
  listadoPermisos: Permiso[] = [];

  roles!: Observable<Rol[]>;
  personas!: Observable<Persona[]>;

  personaDatos: Persona = new Persona(0, '', '', '', '', '');
  rolDatos: Rol = new Rol(0, '', this.listadoPermisos, '', '', true);
  usuarioActual: Usuario = new Usuario(0, '', '', '', [], [], true, null, '');

  fechan = new Date();
  result = this.fechan.toLocaleTimeString();
  constructor(
    private usuarioService: UsuarioService,
    private permisoService: PermisoService,
    private rolService: RolService,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.roles = this.rolService.findAll();
    this.personas = this.personaService.findAll();
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
    if (usuario.fechaCreacion == null) {
      usuario.fechaCreacion = this.formatDate(new Date());
    }
    usuario.fechaModificacion = this.formatDate(new Date());

    console.log('ingresando al método save');
    console.log(usuario);
    this.usuarioService.save(usuario).subscribe((respuesta) => {
      this.usuarioActual = new Usuario(0, '', '', '', [], [], true, null, '');
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
      this.usuarioActual = new Usuario(0, '', '', '', [], [], true, null, '');
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

  limpiarUsuario() {
    this.usuarioActual = new Usuario(0, '', '', '', [], [], true, null, '');
  }

  limpiarPersona() {
    this.personaDatos = new Persona(0, '', '', '', '', '');
  }
  limpiarRol() {
    this.rolDatos = new Rol(0, '', [], '', '', true);
  }
  limpiarPermiso() {
    for (let i = this.listadoPermisos.length; i > 0; i--) {
      this.listadoPermisos.pop();
    }
    console.log(this.listadoPermisos);
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
    console.log(person);
    this.personaService.buscarId(person.personaId).subscribe((respuesta) => {
      this.personaDatos = respuesta;
    });
    console.log(this.personaDatos);
  }

  seleccionarPersonaDatos(person: Persona) {
    this.personaService.buscarId(person.personaId).subscribe((respuesta) => {
      this.personaDatos = respuesta;
    });
    this.usuarioActual.persona.push(person);
    this.usuarioActual.nombre = person.nombre + ' ' + person.apellido;
    console.log(this.usuarioActual);
  }

  buscarRol(rol: Rol) {
    console.log(rol);
    this.rolService.findById(rol.rolId).subscribe((respuesta) => {
      this.rolDatos = respuesta;
    });
    console.log(this.rolDatos);
  }

  seleccionarRolDatos(rol: Rol) {
    this.rolService.findById(rol.rolId).subscribe((respuesta) => {
      this.rolDatos = respuesta;
    });
    this.usuarioActual.roles.push(rol);

    console.log(this.usuarioActual);
  }

  buscarPermisos(rol: Rol) {
    this.permisoService.findByRolId(rol.rolId).subscribe((respuesta) => {
      console.log(respuesta);
      respuesta.forEach((permiso) => {
        this.listadoPermisos.push(permiso);
      });
    });
  }

  filtrarRolesInactivos() {
    this.roles.subscribe((respuesta) => {
      respuesta.forEach((rol) => {
        if (rol.estado == false) {
          var elementPermiso = document.getElementById('rol' + rol.rolId);
          elementPermiso.classList.add('hidden');
        }
      });
    });
  }
}
