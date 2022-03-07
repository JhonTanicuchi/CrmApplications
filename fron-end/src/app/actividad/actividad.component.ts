import { Component, OnInit } from '@angular/core';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  actividadActual: Actividad = new Actividad(0,"","",false);

  listadoActividades: Actividad[]=[];

  constructor(
    private actividadService: ActividadService
  ) { }

  ngOnInit(): void {
    this.findAll();
   }
   save (actividad:Actividad):void
   {
     console.log("ingrese al metodo save")
     this.actividadService.save(actividad).subscribe(
       (respuesta)=>{
         this.actividadActual = new Actividad(0,"","",false);
         this.findAll();
         
       }
     );
   }
   findAll():void
   {
     this.actividadService.findAll().subscribe(
        respuesta => this.listadoActividades = respuesta
     );
   }
   seleccionarActividad(actividad:Actividad):void
   {
     this.actividadActual = actividad;
   }
 
   deleteById(id: number):void
   {
     this.actividadService.deleteById(id).subscribe(
       () => {
         this.listadoActividades = this.listadoActividades
         .filter( item => item.actividadId != id);
         this.actividadActual = new Actividad (0,"","",false);
       }
 
     );
   }
  
 
 }

