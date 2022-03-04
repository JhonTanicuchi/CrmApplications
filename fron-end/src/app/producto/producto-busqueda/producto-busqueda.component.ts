import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-busqueda',
  templateUrl: './producto-busqueda.component.html'
})
export class ProductoBusquedaComponent implements OnInit {

  productos!: Observable<Producto[]>;

  @Output() emisor = new EventEmitter<Producto>();

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void
  {
    console.log("ingresando en busar"+termino)
    this.productos = this.productoService.findByName(termino);
  }

  seleccionar(producto: Producto):void
  {
    this.emisor.emit(producto);
  }

}
