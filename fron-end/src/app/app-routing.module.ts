import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './campania/campania.component';

const routes: Routes = [
  {path:'campania',component: CampaniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
