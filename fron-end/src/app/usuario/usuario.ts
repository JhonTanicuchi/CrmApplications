import { Persona } from "../persona/persona";

export class Usuario {
  constructor(
    public usuarioId: number,
    public nombre: string,
    public username: string,
    public password: string,
    public rolId: number,
    public persona: Persona,
    public estado: boolean
  ) {}
}
