import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

import { MenuComponent } from './compartidos/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CotizacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
