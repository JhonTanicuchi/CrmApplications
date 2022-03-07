//MODELO

import { Component, OnInit } from '@angular/core';
import { Etapa } from './etapa';
import { EtapaService } from './etapa.service';

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {

  etapaActual: Etapa = new Etapa(0,"","",false); // datos vacios al ingresar x vista frondend
  listadoEtapas: Etapa []= [];

  constructor(
    private etapaService: EtapaService // trae la parte del etapa.service inyectando
  ) { }

  ngOnInit(): void {
    //controlamos todo el ciclo de angular todo lo q llamemos findAll linea 38 lo ejecute y cree el componente
    this.findAll();

  }

  save(etapa: Etapa):void
  {
    console.log("ingresando al metodo save")
    //mediante el metodo subscribe-relacion con observable nos va a retornar lo del save
    this.etapaService.save(etapa).subscribe(
      (respuesta) =>{
        this.etapaActual = new Etapa(0,"","",false); //nos va a dejar limpiar la pantalla despues de ingresar datos
        this.findAll();
      }
    );
  }

  findAll():void
  {
    this.etapaService.findAll().subscribe(
      respuesta => this.listadoEtapas = respuesta
    );
  }

  seleccionarEtapa(etapa: Etapa):void
  {
    this.etapaActual = etapa;
  }

  deleteById(id: number):void //recibe un valor de tipo number que no recibe nada
  {
    this.etapaService.deleteById(id).subscribe(  //llamamos al servicio
      ()=>{
      this.listadoEtapas = this.listadoEtapas
      .filter( item => item.etapasId != id);
      this.etapaActual = new Etapa(0,"","",false);
      }
      );
}

limpiarForm() {
  this.etapaActual = new Etapa(0, '', '', false);
}

  EtapasActivos(): number {
  var totalActivos = 0;
  this.listadoEtapas.forEach((etapa) => {
    if (etapa.estado == true) {
      totalActivos++;
    }
  });
  return totalActivos;
}

flag = false;

  cambiarFlag() {
    this.flag = !this.flag;
  }

  iconDelete = false;

  iconDeletFalse() {
    this.iconDelete = false;
  }

  iconDeletTrue() {
    this.iconDelete = true;
  }
}
