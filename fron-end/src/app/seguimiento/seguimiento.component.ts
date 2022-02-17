import { ConfirmationService } from 'primeng/api';
import { Seguimiento } from './../compartidos/models/seguimiento';
import { ApiService } from './../compartidos/service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  seguimientoId: number;
  isSeguimiento: boolean = false;

  seguimientoActual: Seguimiento;

  displayNuevo: boolean = false;
  displayEditar: boolean = false;


  listSeguimientos: Seguimiento[];
  listCreadores: string[];

  formSeguimiento: FormGroup;

  breakpointsModal = {'960px': '75vw', '640px': '100vw'};
  tamanioModal = {width: '40vw'};

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.listarSeguimientos();

    this.listCreadores = ['Ricardo Yaguachi','Kevin Pillago']

    this.formSeguimiento = this.formBuilder.group({
      nombre: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      descripcion: [null,[Validators.required,Validators.minLength(5),Validators.maxLength(200)]],
      fechaCreacion: [null,[Validators.required]],
      creadoPor:[null,[Validators.required,Validators.minLength(10)]]
    })
  }

  listarSeguimientos():void{
    this.apiService.listarSeguimientos()
      .subscribe(res=>{
        this.listSeguimientos = res;
      })
  }

  guardarSeguimiento():void{
    console.log('fomr',this.formSeguimiento.value);
    if(this.formSeguimiento.valid){
      const seguimiento: Seguimiento = {
        estado:true,
        ...this.formSeguimiento.value
      }
      this.apiService.createSeguimiento(seguimiento)
        .subscribe(res=>{
          this.displayNuevo = false;
          this.listarSeguimientos();
        })
    }

  }

  buscarSeguimiento(idSeguimiento: number):void{
    this.seguimientoId = idSeguimiento;
    this.apiService.getSeguimientoById(idSeguimiento)
      .subscribe(res=>{
        this.isSeguimiento = true;
        this.seguimientoActual = res;
      })
  }

  mostrarModalEditar(){
    this.displayEditar = true;
    this.formSeguimiento.patchValue({...this.seguimientoActual});
  }

  actualizarSeguimiento(){
    if(this.formSeguimiento.valid){
      const seguimiento: Seguimiento = {
        seguimientoId: this.seguimientoId,
        estado:true,
        ...this.formSeguimiento.value
      }
      this.apiService.updateSeguimiento(seguimiento)
        .subscribe(res=>{
          this.seguimientoActual = res;
          this.displayEditar = false;
          this.listarSeguimientos();
        })
    }
  }

  limpiar(){
    this.seguimientoId = 0;
    this.formSeguimiento.reset();
  }

  eliminarSeguimiento(event: Event){
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Estás seguro de eliminar este seguimiento?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
         this.apiService.deleteSeguimiento(this.seguimientoId)
          .subscribe(res=>{
            this.listarSeguimientos();
          })
      },
      reject: () => {
          //reject action
          this.seguimientoId = 0;
      }
  });
  }

}
