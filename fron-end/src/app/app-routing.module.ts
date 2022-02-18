import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path:'persona',component:PersonaComponent},
  {path:'',redirectTo:"persona",pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
