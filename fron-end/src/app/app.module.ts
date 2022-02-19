import { PersonaComponent } from 'src/app/persona/persona.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//primeng
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';
import {ToastModule} from 'primeng/toast';

import {MenubarModule} from 'primeng/menubar';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './compartidos/menu/menu.component';
@NgModule({

  declarations: [
    AppComponent,
    SeguimientoComponent,
    PersonaComponent,
    MenuComponent
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
