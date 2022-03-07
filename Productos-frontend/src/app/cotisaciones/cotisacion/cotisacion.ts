import { DetalleCotisacion } from "../detalleCotisacion";

export class Cotisacion {
  constructor(
    public cotisacionId ?:number,
    public nro?:string,
    public fecha?:Date,
    public clienteId?:number,
    public observacion?:string,
    public detallecotisacion ?:DetalleCotisacion[]
  ){}
}
