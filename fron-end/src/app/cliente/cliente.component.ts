import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteActual: Cliente = new Cliente(0,"","");

  listadoClientes: Cliente[] = [];


  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  save(cliente: Cliente):void
  {
    console.log("ingresando al método save")
    this.clienteService.save(cliente).subscribe(
      (respuesta) => {
        this.clienteActual = new Cliente(0,"","");
        this.findAll();
      }
    );
  }

  findAll():void
  {
    this.clienteService.findAll().subscribe(
      respuesta => this.listadoClientes = respuesta
    );
  }

  seleccionarCliente(cliente: Cliente):void
  {
    this.clienteActual = cliente;
  }

  deleteById(id: number):void
  {
    this.clienteService.deleteById(id).subscribe(
      () => {
        this.listadoClientes = this.listadoClientes
        .filter( item => item.clienteId != id);
        this.clienteActual = new Cliente(0,"","");
      }

    );
  }

}