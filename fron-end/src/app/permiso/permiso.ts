export class Permiso {
  constructor(
    public permisoId: number,
    public nombre: string,
    public fechaCreacion: string,
    public fechaModificacion: string,
    public estado: boolean
  ) {}
}

