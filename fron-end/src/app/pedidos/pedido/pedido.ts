import { DetallePedido } from "./detallePedido";

export class Pedido{

  constructor(
    public pedidoId: number,
    public nro: string,
    public fecha: Date,
    public clienteId: number,
    public detallePedido: DetallePedido[]
  )
  {}

}