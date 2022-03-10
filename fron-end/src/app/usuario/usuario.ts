import { Data } from "@angular/router";
import { Persona } from "../persona/persona";
import { Rol } from "../rol/rol";

export class Usuario {
  constructor(
    public usuarioId: number,
    public nombre: string,
    public username: string,
    public password: string,
    public roles: Rol[],
    public persona: Persona[],
    public estado: boolean,
    public fechaCreacion: string,
    public fechaModificacion: string
  ) {}
}
