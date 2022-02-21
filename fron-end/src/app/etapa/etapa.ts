//ENTIDAD

export class Etapa{
  filter(arg0: (item: any) => boolean): Etapa {
    throw new Error('Method not implemented.');
  }
  save(etapa: Etapa) {
    throw new Error('Method not implemented.');
  }
  constructor (
    public etapasId: number,
    public nombre: string,
    public descripcion: string,
    public estado: boolean
    )
    {}

}

