import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadComponent } from './actividad/actividad.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampaniaComponent } from './campania/campania.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { EtapaComponent } from './etapa/etapa.component';
import { PermisoComponent } from './permiso/permiso.component';


@NgModule({
  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent,
    RolComponent,
    HomeComponent,
    UsuarioComponent,
    EtapaComponent,
    ActividadComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
