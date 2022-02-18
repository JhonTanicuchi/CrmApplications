import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisoComponent } from './permiso/permiso.component';
import { MenuComponent } from './compartidos/menu/menu.component';

//primeng

import {MenubarModule} from 'primeng/menubar';
import { PersonaComponent } from './persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
@NgModule({

  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
