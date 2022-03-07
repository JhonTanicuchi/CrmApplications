import { SeguimientoService } from './seguimiento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Seguimiento } from './seguimiento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  blocked: boolean = true;
  seguimientoId!: number;

  seguimientoActual!: Seguimiento;

  displayNuevo: boolean = false;
  displayEditar: boolean = false;


  listSeguimientos: Seguimiento[] = [];
  listCreadores: string[] = [];

  formSeguimiento!: FormGroup;

  breakpointsModal = { '960px': '75vw', '640px': '100vw' };
  tamanioModal = { width: '40vw' };


  constructor(
    private apiService: SeguimientoService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarSeguimientos();

    this.listCreadores = ['Ricardo Yaguachi', 'Kevin Pillago']

    this.formSeguimiento = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      descripcion: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      fechaCreacion: [null, [Validators.required]],
      creadoPor: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  listarSeguimientos(): void {
    this.apiService.listarSeguimientos()
      .subscribe(res => {
        this.listSeguimientos = res;
        this.blocked = false;
      }, err => {
        this.blocked = false;
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error intente más tarde', life:5000});
        console.log(err);
      })
  }

  guardarSeguimiento(): void {
    this.blocked = true;
    if (this.formSeguimiento.valid) {
      const seguimiento: Seguimiento = {
        estado: true,
        ...this.formSeguimiento.value
      }
      this.apiService.createSeguimiento(seguimiento)
        .subscribe(res => {
          this.displayNuevo = false;
          this.blocked = false;
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'Seguimiento guardado correctamente', life: 5000 });
          this.listarSeguimientos();
          this.formSeguimiento.reset();
        }, err => {
          this.blocked = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error intente más tarde', life:5000});
          console.log(err);
        })
    }

  }

  buscarSeguimiento(idSeguimiento: number): void {
    this.seguimientoId = idSeguimiento ;
    this.apiService.getSeguimientoById(this.seguimientoId)
      .subscribe(res => {
        this.seguimientoActual = res;
      }, err => {
        this.blocked = false;
        console.log(err);
      })
/*     this.router.navigate([`/seguimiento/${idSeguimiento}`]);
 */  }

  mostrarModalEditar() {
    this.displayEditar = true;
    this.formSeguimiento.patchValue({ ...this.seguimientoActual });
  }

  actualizarSeguimiento() {
    this.blocked = true;
    if (this.formSeguimiento.valid) {
      const seguimiento: Seguimiento = {
        seguimientoId: this.seguimientoId,
        estado: true,
        ...this.formSeguimiento.value
      }
      this.apiService.updateSeguimiento(seguimiento)
        .subscribe(res => {
          this.blocked = false;
          this.seguimientoActual = res;
          this.formSeguimiento.reset();
          this.displayEditar = false;
          this.listarSeguimientos();
          this.messageService.add({ severity: 'info', summary: 'Información', detail: 'Seguimiento actualizado correctamente', life: 5000 });
        }, err => {
          this.blocked = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error intente más tarde', life:5000});
          console.log(err);
        })
    }
  }

  limpiar() {
    this.seguimientoId = 0;
    this.formSeguimiento.reset();
  }

  eliminarSeguimiento(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Estás seguro de eliminar este seguimiento?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.blocked = true;
        this.apiService.deleteSeguimiento(this.seguimientoId)
          .subscribe(res => {
            this.blocked = false;
            this.formSeguimiento.reset();
            this.listarSeguimientos();
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'Seguimiento eliminado correctamente', life: 5000 });
          }, err => {
            this.blocked = false;
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo un error intente más tarde', life:5000});
            console.log(err);
          })
      },
      reject: () => {
        //reject action
        this.seguimientoId = 0;
      }
    });
  }

}
