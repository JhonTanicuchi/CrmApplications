import { Component, OnInit } from '@angular/core';
import { Permiso } from './permiso';
import { PermisoService } from './permiso.service';



@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
})
export class PermisoComponent implements OnInit {
  permisoActual: Permiso = new Permiso(0, '', '', '', false);

  listadoPermisos: Permiso[] = [];

  constructor(private permisoService: PermisoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  formatDate(current_datetime: Date) {
    let formatted_date =
      current_datetime.getFullYear() +
      '-' +
      (current_datetime.getMonth() + 1) +
      '-' +
      current_datetime.getDate() +
      ' ' +
      current_datetime.getHours() +
      ':' +
      current_datetime.getMinutes() +
      ':' +
      current_datetime.getSeconds();
    return formatted_date;
  }

  save(permiso: Permiso): void {
    if (permiso.fechaCreacion == '') {
      permiso.fechaCreacion = this.formatDate(new Date());
    }
    permiso.fechaModificacion = this.formatDate(new Date());
    console.log('ingresando al método save');
    this.permisoService.save(permiso).subscribe((respuesta) => {
      this.permisoActual = new Permiso(0, '', '', '', false);
      this.findAll();
    });
  }
  findAll(): void {
    this.permisoService
      .findAll()
      .subscribe((respuesta) => (this.listadoPermisos = respuesta));
  }

  seleccionarPermiso(permiso: Permiso): void {
    this.permisoActual = permiso;
  }

  limpiarForm() {
    this.permisoActual = new Permiso(0, '', '', '', false);
  }

  deleteById(id: number): void {
    this.permisoService.deleteById(id).subscribe(() => {
      this.listadoPermisos = this.listadoPermisos.filter(
        (item) => item.permisoId != id
      );
      this.permisoActual = new Permiso(0, '', '', '', false);
    });
  }
}
