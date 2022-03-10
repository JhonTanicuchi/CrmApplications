import { Permiso } from "../permiso/permiso";

export class Rol {
  constructor(
    public rolId: number,
    public nombre: string,
    public permisos: Permiso[],
    public fechaCreacion: string,
    public fechaModificacion: string,
    public estado: boolean
  ) {}
}
