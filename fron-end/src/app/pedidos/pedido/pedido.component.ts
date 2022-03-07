import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/cliente';
import { Producto } from 'src/app/producto/producto';
import { DetallePedido } from './detallePedido';
import {Pedido} from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  cliente: Cliente = new Cliente(0,"","");

  detallesPedido: DetallePedido[] = [];
  pedido: Pedido = new Pedido(0,"", new Date, 0, this.detallesPedido);

  constructor(
    private pedidoService : PedidoService
  ) { }

  ngOnInit(): void {
  }

  agregarDetalle(producto: Producto): void
  {
    this.detallesPedido.push(new DetallePedido(producto.productoId, 1, producto.precio, producto.nombre));
  }

  guardar() : void
  {
    this.pedido.clienteId = this.cliente.clienteId;
    this.pedidoService.save(this.pedido).subscribe();
    this.limpiar();
  }

  limpiar():void{

    this.cliente = new Cliente(0,"","");
    this.detallesPedido = [];
    this.pedido= new Pedido(0,"", new Date, 0, this.detallesPedido);
  }

}
