
import { Seguimiento } from './../seguimiento';

import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-seguimiento-etapas',
  templateUrl: './seguimiento-etapas.component.html',
  styleUrls: ['./seguimiento-etapas.component.css']
})
export class SeguimientoEtapasComponent implements OnInit {

  @Input() seguimiento: Seguimiento;

  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];


  constructor() { }

  ngOnInit(): void {
    console.log(this.seguimiento);

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
  }

}
