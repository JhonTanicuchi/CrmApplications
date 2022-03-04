import { DetalleCotizacion } from "./detalleCotizacion";

export class Cotizacion{

  constructor(
    public cotizacionId: number,
    public nro: string,
    public fecha: Date,
    public clienteId: number,
    public detalleCotizacion: DetalleCotizacion[]

  )
  {}

}
