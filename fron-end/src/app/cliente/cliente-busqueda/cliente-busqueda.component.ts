import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-busqueda',
  templateUrl: './cliente-busqueda.component.html',
  styleUrls: ['./cliente-busqueda.component.css']
})
export class ClienteBusquedaComponent implements OnInit {

  clientes!: Observable<Cliente[]>;
  nombreClienteSeleccionado: string="";

  @Output() emisorEvento = new EventEmitter<Cliente>();

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string):void
  {
    this.clientes = this.clienteService.findAllByName(termino);
  }

  seleccionar(cliente: Cliente): void
  {
    this.nombreClienteSeleccionado = cliente.nombre;
    this.emisorEvento.emit(cliente);
  }

}
