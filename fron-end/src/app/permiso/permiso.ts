import { Data } from "@angular/router";

export class Permiso {

    constructor(
      public permisoId: number,
      public nombrePermiso: string,
      public fechaCreacion: Data,
      public fechaModificacion: Data,
      public estado: boolean
    )
    {}
  }
  