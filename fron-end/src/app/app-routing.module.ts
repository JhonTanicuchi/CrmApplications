import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapaComponent } from './etapa/etapa.component';

const routes: Routes = [
  {path: 'etapa', component: EtapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
