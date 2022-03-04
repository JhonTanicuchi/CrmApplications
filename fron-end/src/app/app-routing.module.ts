import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './reporte/cotizacion/cotizacion.component';


const routes: Routes = [
  {path: 'cotizacion', component: CotizacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
