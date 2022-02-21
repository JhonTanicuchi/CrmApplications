import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadComponent } from './actividad/actividad.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampaniaComponent } from './campania/campania.component'
import { RolComponent } from './rol/rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { EtapaComponent } from './etapa/etapa.component';
import { PermisoComponent } from './permiso/permiso.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { PersonaComponent } from './persona/persona.component';

//primeng
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    PermisoComponent,
    CampaniaComponent,
    MenuComponent,
    RolComponent,
    HomeComponent,
    UsuarioComponent,
    EtapaComponent,
    ActividadComponent,
    CotizacionComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    BlockUIModule,
    ToastModule,
    DialogModule,
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
