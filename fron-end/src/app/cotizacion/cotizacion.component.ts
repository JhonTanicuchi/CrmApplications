import { Component, OnInit } from '@angular/core';
import { Cotizacion } from './cotizacion';
import { CotizacionService } from './cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  cotizacionActual : Cotizacion = new Cotizacion(0,0," "," "," "," "," "," " ); 

  listadoCotizacion: Cotizacion[] = [];

  constructor(
      private cotizacionService : CotizacionService

  ) { }

  ngOnInit(): void {
    this.findAll();
  }

    save(cotizacion: Cotizacion): void
    {
      console.log("ingresando al metodo save")
      this.cotizacionService.save(cotizacion).subscribe(
      (respuesta) => {
        this.cotizacionActual = new Cotizacion(0,0," "," "," "," "," "," " );
        this.findAll();  
      }
    );  
  }

  findAll(): void
  {
    this.cotizacionService.findAll().subscribe(
      respuesta => this.listadoCotizacion = respuesta
    );
  }

  seleccionarCotizacion(cotizacion: Cotizacion):void
  {
    this.cotizacionActual = cotizacion;
  }

  deleteById(id: number): void
  {
    this.cotizacionService.deleteById(id).subscribe(
      ( ) =>{
        this.listadoCotizacion = this.listadoCotizacion
        .filter(item => item.idcliente != id)
        this.cotizacionActual = new Cotizacion(0,0," "," "," "," "," "," " );
      }

    );
  }

}
