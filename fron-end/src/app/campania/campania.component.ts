import { Component, OnInit } from '@angular/core';
import { Campania} from './campania';
import { CampaniaService } from './campania.service';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {

  campaniaActual: Campania = new Campania (0,"",new Date(),new Date(),"",false);

  listadoCampanias: Campania[] = [];  

  constructor(
    private campaniaService:CampaniaService,    
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  save(campania: Campania):void
  {
    console.log("ingresando al método save")
    this.campaniaService.save(campania).subscribe(
      (respuesta) => {
        this.campaniaActual = new Campania (0,"",new Date(),new Date(),"",false);
        this.findAll();
      }
    );
  }

  findAll():void
  {
    this.campaniaService.findAll().subscribe(
      respuesta => this.listadoCampanias = respuesta
    );
  }

  seleccionarCampania(campania: Campania):void
  {
    this.campaniaActual = campania;
  }

  deleteById(id: number):void
  {
    this.campaniaService.deleteById(id).subscribe(
      () => {
        this.listadoCampanias = this.listadoCampanias
        .filter( item => item.campaniaId != id);
        this.campaniaActual = new Campania (0,"",new Date(),new Date(),"",false);
      }

    );
  }
 

}

