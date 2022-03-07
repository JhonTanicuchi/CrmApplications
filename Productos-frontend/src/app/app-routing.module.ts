import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotisacionComponent } from './cotisaciones/cotisacion/cotisacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:" ",redirectTo:"inicio"},
  {path:"inicio" ,component:InicioComponent},
  {path:"producto" ,component:ProductoComponent},
  {path:"cotisacion",component:CotisacionComponent},
  {path:"**",redirectTo:"inicio"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
