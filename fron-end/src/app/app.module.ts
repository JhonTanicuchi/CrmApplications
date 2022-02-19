import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisoComponent } from './permiso/permiso.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { RolComponent } from './rol/rol.component';
import { CampaniaComponent } from './campania/campania.component';
import { PersonaComponent } from './persona/persona.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

//primeng
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';
import {ToastModule} from 'primeng/toast';

import {MenubarModule} from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({

  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent,
    CampaniaComponent,
    RolComponent,
    HomeComponent,
    UsuarioComponent,
    SeguimientoComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    DialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    BlockUIModule,
    ToastModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
