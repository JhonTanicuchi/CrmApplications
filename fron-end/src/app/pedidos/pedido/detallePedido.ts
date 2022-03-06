export class DetallePedido {

  constructor(
    public productoId: number,
    public cantidad: number,
    public precio: number,
    public nombreProducto: string
  )
  {}
}