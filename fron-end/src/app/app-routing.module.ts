import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './campania/campania.component';
import { PermisoComponent } from './permiso/permiso.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
//import { EtapaComponent } from './etapa/etapa.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'campania',component: CampaniaComponent},
  {path: 'permiso',component: PermisoComponent},
  {path: 'rol', component: RolComponent},
  {path: 'usuario', component: UsuarioComponent},
  //{path: 'etapa', component: EtapaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
