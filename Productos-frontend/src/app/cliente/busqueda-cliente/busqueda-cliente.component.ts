import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente.component.html',
  styleUrls: ['./busqueda-cliente.component.css'],
})
export class BusquedaClienteComponent implements OnInit {
  clientes!: Observable<Cliente[]>;

  nombreClienteSeleccionado :string="";
  @Output() emisorEvento = new EventEmitter<Cliente>();

  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.clientes = this.clienteService.findAllByName(termino);
  }
  seleccionar ( cliente :Cliente):void{
    this.nombreClienteSeleccionado=cliente.nombre;
    console.log(cliente.nombre);
    this.emisorEvento.emit(cliente);
  }
}
