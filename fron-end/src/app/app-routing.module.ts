import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol/rol.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'rol', component: RolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
