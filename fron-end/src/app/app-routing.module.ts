import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'seguimiento', component: SeguimientoComponent},
  {path: '', redirectTo:'seguimiento', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
