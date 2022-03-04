import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/cliente';
import { Producto } from 'src/app/producto/producto';
import { DetalleCotizacion } from './detalleCotizacion';
import { Cotizacion } from './cotizacion';
import { CotizacionService } from './cotizacion.service';

@Component({
  selector: 'app-factura',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  cliente: Cliente = new Cliente(0,"","");

  detallesCotizacion: DetalleCotizacion[] = [];
  cotizacion: Cotizacion = new Cotizacion(0,"",new Date, 0, this.detallesCotizacion);

  constructor(
    private cotizacionService: CotizacionService
  ) { }

  ngOnInit(): void {
  }

  agregarDetalle(producto: Producto): void
  {
    this.detallesCotizacion.push(new DetalleCotizacion(producto.productoId, 1, producto.precio, producto.nombre));
  }

  facturar(): void
  {
    this.cotizacion.clienteId = this.cliente.clienteId;
    this.cotizacionService.save(this.cotizacion).subscribe(
      (cotizacionConId) => {
        this.cotizacionService.getPdf(cotizacionConId.cotizacionId).subscribe(
          (cotizacionPdf: Blob) => {
            const archivo = new Blob([cotizacionPdf], {type: 'application/pdf'});
            const rutaArchivo = URL.createObjectURL(archivo);
            window.open(rutaArchivo, '_blank' , 'width=400, heigh=400');
          }
        );
      }
    );
    this.limpiar();
  }

  limpiar():void{

    this.cliente = new Cliente(0,"","");
    this.detallesCotizacion= [];
    this.cotizacion= new Cotizacion(0,"",new Date, 0, this.detallesCotizacion);
  }

}
