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

  etapaActual: Etapa = new Etapa(0,"","",false);
  listadoEtapas: Etapa []= [];

  constructor(
    private etapaService: EtapaService 
  ) { }

  ngOnInit(): void {
    this.findAll();

  }

  save(etapa: Etapa):void
  {
    console.log("ingresando al metodo save")
    this.etapaService.save(etapa).subscribe(
      (respuesta) =>{
        this.etapaActual = new Etapa(0,"","",false); 
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

  deleteById(id: number):void 
  {
    this.etapaService.deleteById(id).subscribe(  
      ()=>{
      this.listadoEtapas = this.listadoEtapas
      .filter( (item) => item.etapasId != id);
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
