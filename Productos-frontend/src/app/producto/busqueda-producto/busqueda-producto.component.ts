import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto';
import {ProductoService} from '../producto.service'
@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  productos!:Observable<Producto[]>

  @Output() emisor = new EventEmitter<Producto>();



  constructor(
    private productoservice : ProductoService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino :string):void{
    console.log(termino);
    this.productos= this.productoservice.findByName(termino);
  }


  seleccionar(producto :Producto):void{
    this.emisor.emit(producto);
  }
}
