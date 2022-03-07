import { ConocenosComponent } from './conocenos/conocenos.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { PersonaComponent } from 'src/app/persona/persona.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ActividadComponent } from './actividad/actividad.component';
import { EtapaComponent } from './etapa/etapa.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { SeguimientoEtapasComponent } from './seguimiento/seguimiento-etapas/seguimiento-etapas.component';
import { RolComponent } from './rol/rol.component';
import { CampaniaComponent } from './campania/campania.component';
import { PermisoComponent } from './permiso/permiso.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './login/token.interceptor';
import { RespuestaBackendInterceptor } from './login/respuesta-backend.interceptor';
import { AlertaComponent } from './login/alerta/alerta/alerta.component';

//primeng
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { SortablejsModule } from 'ngx-sortablejs';
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
    PersonaComponent,
    SeguimientoComponent,
    ConocenosComponent,
    SeguimientoEtapasComponent,
    LoginComponent,
    AlertaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    BlockUIModule,
    ToastModule,
    DialogModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RespuestaBackendInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
