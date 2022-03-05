import { Data } from "@angular/router";

export class Permiso {

    constructor(
      public permisoId: number,
      public nombre: string,
      public fechaCreacion: Data,
      public fechaModificacion: Data,
      public estado: boolean
    )
    {}
  }
