import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { CotisacionComponent } from './cotisaciones/cotisacion/cotisacion.component';
import { BusquedaClienteComponent } from './cliente/busqueda-cliente/busqueda-cliente.component';
import { BusquedaProductoComponent } from './producto/busqueda-producto/busqueda-producto.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CotisacionComponent,
    BusquedaClienteComponent,
    BusquedaProductoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
