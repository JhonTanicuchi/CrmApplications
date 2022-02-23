export class Usuario {

  constructor(
    public usuarioId: number,
    public username: string,
    public password: string,
    public rolId: number,
    public permisos: number,
    public empleadoId: number,
    public estado: boolean
  )
  {}
}
