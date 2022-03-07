import { SeguimientoComponent } from './../seguimiento.component';
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
import { Options } from 'sortablejs';
import { HttpXhrBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seguimiento-etapas',
  templateUrl: './seguimiento-etapas.component.html',
  styleUrls: ['./seguimiento-etapas.component.css']
})
export class SeguimientoEtapasComponent implements OnInit {


  @Input() seguimiento: Seguimiento;

  etapasSeguimiento: EtapaSeguimiento[] = [];

  idEtapaPersona: number = 0;

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
    private seguimientoComponente: SeguimientoComponent
  ) { }

  ngOnInit(): void {
    this.listarEtapasPorSeguimiento(this.seguimiento.seguimientoId);
    this.formEtapaPersona = this.formBuilder.group({
      etapaId: [null, [Validators.required, Validators.minLength(1)]],
      personaId: [null, [Validators.required, Validators.minLength(1)]],
      observacion: [null],
    })
  }

  listarEtapasPorSeguimiento(idSeguimineto: number): void {
    this.seguimientoComponente.blocked = true;

    this.apiService.listarEtapasDeSeguimiento(idSeguimineto)
      .subscribe((res: EtapaSeguimiento[]) => {
        this.etapasSeguimiento = res;
        this.seguimientoComponente.blocked = false;
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
    this.seguimientoComponente.blocked = true;

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

  options: Options = {

    group: 'tablero',
    onAdd: function (/**Event*/evt) {
      var itemEl = evt.item;
      let etapaPersonaId = itemEl.id;
      let etapaId = evt.to.id;

      const httpClient = new HttpClient(new HttpXhrBackend({
        build: () => new XMLHttpRequest()
      }));

      let seguimientoEtapasService: SeguimientoEtapasService = new SeguimientoEtapasService(httpClient);

      let putEtapaPersona : EtapaPersona = {
        etapaPersonaId : Number(etapaPersonaId) ,
        etapaId: Number(etapaId)
      }

      seguimientoEtapasService.updateEtapaPersona(putEtapaPersona)
      .subscribe();

    },
  }


}
