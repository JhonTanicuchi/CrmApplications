import { Permiso } from "../permiso/permiso";

export class Rol {
  estado: boolean;
  constructor(
    public rolId: number,
    public nombre: string,
    public permisos: Permiso[]
  ) {}
}
