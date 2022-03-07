import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotisacionComponent } from './cotisaciones/cotisacion/cotisacion.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:"producto" ,component:ProductoComponent},
  {path:"cotisacion",component:CotisacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
