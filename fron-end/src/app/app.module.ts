import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisoComponent } from './permiso/permiso.component';
import { MenuComponent } from './compartidos/menu/menu.component';

//primeng

import {MenubarModule} from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
