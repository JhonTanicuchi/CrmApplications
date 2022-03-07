import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productoActual: Producto = new Producto(0, '', '', '', '');

  listadoProductos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    //controla el ciclo de vida de los componentes en angular
    this.findAll();
  }

  save(producto: Producto): void {
    this.productoService.save(producto).subscribe((respuesta) => {
      this.productoActual = new Producto(0, '', '', '', '');
      this.findAll();
    });
  }
  findAll(): void {
    this.productoService
      .findAll()
      .subscribe((respuesta) => (this.listadoProductos = respuesta));
  }

  seleccionarProducto(producto: Producto): void {
    this.productoActual = producto;
  }


  deleteById(id:number):void{
    this.productoService.deleteById(id).subscribe(
      ()=>{
        this.listadoProductos=this.listadoProductos.filter(
          item =>item.productoId !=id
        );
         this.productoActual= new Producto(0, '', '', '','');
      }
    );
  }
}
