import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { EtapaComponent } from './etapa/etapa.component';
import { MenuComponent } from './compartidos/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EtapaComponent,
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
