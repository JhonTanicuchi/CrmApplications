import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './campania/campania.component';
import { PermisoComponent } from './permiso/permiso.component';

const routes: Routes = [
  {path:'campania',component: CampaniaComponent},
  {path: 'permiso',component: PermisoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
