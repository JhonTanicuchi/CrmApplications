import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PermisoComponent } from './permiso/permiso.component';

=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './compartidos/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './login/token.interceptor';
import { RespuestaBackendInterceptor } from './login/respuesta-backend.interceptor';
import { AlertaComponent } from './login/alerta/alerta/alerta.component';
>>>>>>> JT-Usuarios

@NgModule({
  declarations: [
    AppComponent,
    PermisoComponent,
    MenuComponent,
    HomeComponent,
<<<<<<< HEAD
=======
    UsuarioComponent,
    LoginComponent,
    AlertaComponent,
>>>>>>> JT-Usuarios
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
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
