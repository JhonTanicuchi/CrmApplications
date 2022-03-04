export class Usuario {
  constructor(
    public usuarioId: number,
    public nombre: string,
    public username: string,
    public password: string,
    public estado: boolean,
    public rolId: number
  ) /* public personaId: number, */
  {}
}
