import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';
import { CotizacionComponent } from './reporte/cotizacion/cotizacion.component'; 

import { MenuComponent } from './compartidos/menu/menu.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteBusquedaComponent } from './cliente/cliente-busqueda/cliente-busqueda.component';
import { ProductoBusquedaComponent } from './producto/producto-busqueda/producto-busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    CotizacionComponent,
    MenuComponent,
    ClienteComponent,
    ClienteBusquedaComponent,
    ProductoBusquedaComponent
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
