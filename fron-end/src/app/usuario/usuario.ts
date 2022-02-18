export class Usuario {

  constructor(
    public usuarioId: number,
    public username: string,
    public password: string,
    public rollId: number,
    public permisoId: number,
    public empleadoId: number,
    public estado: boolean
  )
  {}
}
