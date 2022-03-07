import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/cliente';
import { Producto } from 'src/app/producto/producto';
import { DetalleCotisacion } from '../detalleCotisacion';
import { Cotisacion } from './cotisacion';

@Component({
  selector: 'app-cotisacion',
  templateUrl: './cotisacion.component.html',
  styleUrls: ['./cotisacion.component.css']
})
export class CotisacionComponent implements OnInit {

  cliente :Cliente = new Cliente(0,"","","",);
  detallesCotisacion :DetalleCotisacion[]=[];
  cotisacion: Cotisacion=new Cotisacion(0,"",new Date,0,"",this.detallesCotisacion);

  constructor() { }

  ngOnInit(): void {
  }
  agregarDetalle (producto:Producto):void{
    this.detallesCotisacion.push(new DetalleCotisacion(producto.productoId));
  }

}
