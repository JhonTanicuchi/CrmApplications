import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { ActividadComponent } from './actividad/actividad.component';
>>>>>>> develop
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RolComponent } from './rol/rol.component';
import { HomeComponent } from './home/home.component';
import { EtapaComponent } from './etapa/etapa.component';
import { PermisoComponent } from './permiso/permiso.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent,
    RolComponent,
    HomeComponent,
=======
    PermisoComponent,
    CampaniaComponent,
    MenuComponent,
    RolComponent,
    HomeComponent,
    UsuarioComponent,
    EtapaComponent,
    ActividadComponent,
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
