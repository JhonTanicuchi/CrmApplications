 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './actividad/actividad.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';

const routes: Routes = [
  {path: 'actividad', component:ActividadComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'pedido', component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
