import { EtapaPersona } from './etapa-persona';
import { PersonaService } from './../../persona/persona.service';
import { EtapaService } from './../../etapa/etapa.service';
import { EtapaSeguimiento } from './etapa-seguimiento';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguimientoEtapasService } from './seguimiento-etapas.service';

import { Seguimiento } from './../seguimiento';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona/persona';
import { Etapa } from 'src/app/etapa/etapa';

@Component({
  selector: 'app-seguimiento-etapas',
  templateUrl: './seguimiento-etapas.component.html',
  styleUrls: ['./seguimiento-etapas.component.css']
})
export class SeguimientoEtapasComponent implements OnInit {

  @Input() seguimiento: Seguimiento;

  displayNuevo = false;

  listPersona: Persona[] = [];
  listEtapas: Etapa[] = [];

  breakpointsModal = { '960px': '75vw', '640px': '100vw' };
  tamanioModal = { width: '40vw' };

  formEtapaPersona: FormGroup;

  constructor(
    private apiService: SeguimientoEtapasService,
    private etapaService: EtapaService,
    private personaService: PersonaService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    console.log(this.seguimiento);
    this.listarEtapasPorSeguimiento(this.seguimiento.seguimientoId);
    this.formEtapaPersona = this.formBuilder.group({
      etapaId: [null, [Validators.required, Validators.minLength(1)]],
      personaId: [null, [Validators.required, Validators.minLength(1)]],
      observacion: [null],
    })
  }

  listarEtapasPorSeguimiento(idSeguimineto: number): void {
    this.apiService.listarEtapasDeSeguimiento(idSeguimineto)
      .subscribe((res: EtapaSeguimiento[]) => {
        console.log('etapas de este seguimiento');
        console.log(res);


      });
  }

  abrirModal() {
    this.displayNuevo = true;
    this.listarEtapas();
    this.listarPersonas();
  }

  listarEtapas() {
    this.etapaService.findAllBySeguimientoId(this.seguimiento.seguimientoId).subscribe((res: Etapa[]) => {
      this.listEtapas = res;
    });
  };

  listarPersonas() {
    this.personaService.findAll().subscribe((res: Persona[]) => {
      this.listPersona = res;
    });
  };

  limpiar() {
    this.formEtapaPersona.reset();
    this.displayNuevo = false;
  }

  guardarEtapaPersona() {
    console.log(this.formEtapaPersona.value);
    const nuevaEtapaPersona: EtapaPersona = {
      ...this.formEtapaPersona.value
    }
    this.apiService.createEtapaPersona(nuevaEtapaPersona)
      .subscribe(res => {
        this.listarEtapasPorSeguimiento(this.seguimiento.seguimientoId);
        this.limpiar();
      });
  }
}
