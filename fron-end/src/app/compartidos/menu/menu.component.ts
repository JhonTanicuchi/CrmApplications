import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Administración',
          icon:'pi pi-fw pi-file',
      },
      {
          label:'Actividades',
          icon:'pi pi-fw pi-pencil',
      },
      {
          label:'Persona',
          icon:'pi pi-fw pi-user',
          command: ()=>{
            this.router.navigate(['/persona'])
          }
      },
      {
          label:'Seguimientos',
          icon:'pi pi-fw pi-calendar',
          command: ()=>{
            this.router.navigate(['/seguimiento'])
          }
      },
      {
          label:'Salir',
          icon:'pi pi-fw pi-power-off',
          command: ()=>{
            this.router.navigate(['/'])
          }
      }
  ];
  }

}
