import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisoComponent } from './permiso/permiso.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampaniaComponent } from './campania/campania.component';
import { RolComponent } from './rol/rol.component';


@NgModule({
  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent,
    CampaniaComponent,
    RolComponent,
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
