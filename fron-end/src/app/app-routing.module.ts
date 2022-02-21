import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { HomeComponent } from './home/home.component';
import { EtapaComponent } from './etapa/etapa.component';
import { ActividadComponent } from './actividad/actividad.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rol', component: RolComponent },
=======
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'campania',component: CampaniaComponent},
  {path: 'permiso',component: PermisoComponent},
  {path: 'rol', component: RolComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'etapa', component: EtapaComponent},
  {path: 'actividad', component:ActividadComponent}
>>>>>>> develop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
