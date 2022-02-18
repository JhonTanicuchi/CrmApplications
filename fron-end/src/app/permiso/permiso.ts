
export class Permiso{
    constructor(
        public permisoId: number,
        public nombrePermiso: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public estado: boolean
      )
      {}
}