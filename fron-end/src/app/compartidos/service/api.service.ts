import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Persona } from './../models/persona';
import { Seguimiento } from './../models/seguimiento';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaComponent } from 'src/app/persona/persona.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.API_URL;

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  urlSeguimiento = this.url + '/seguimiento';
  urlPersona = this.url + '/persona';

  constructor(private http: HttpClient) { }

  public listarSeguimientos(): Observable<Seguimiento[]>{
    return this.http.get<Seguimiento[]>(this.urlSeguimiento+'/allSeguimiento',this.httpOptions);
  }

  public getSeguimientoById(idSeguimiento: number):Observable<Seguimiento>{
    return this.http.get<Seguimiento>(this.urlSeguimiento+'/findById/'+idSeguimiento,this.httpOptions);
  }

  public createSeguimiento(seguimiento: Seguimiento):Observable<Seguimiento>{
    return this.http.post<Seguimiento>(this.urlSeguimiento+'/save',seguimiento,this.httpOptions);
  }

  public updateSeguimiento(seguimiento: Seguimiento):Observable<Seguimiento>{
    return this.http.put<Seguimiento>(this.urlSeguimiento+'/put',seguimiento,this.httpOptions)
  }

  public deleteSeguimiento(idSeguimiento: number):Observable<Seguimiento>{
    return this.http.put<Seguimiento>(this.urlSeguimiento+'/delete/'+idSeguimiento,null,this.httpOptions);
  }

//crear
  public createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlPersona + '/save', persona, this.httpOptions);
  }
//listar
  public findAll (): Observable<Persona[]>{
    return this.http.get <Persona[]>(this.urlPersona + '/allPersonas' ,this.httpOptions);
  }
//buscar
  public buscarId (personaId :number): Observable<Persona>{
    return this.http.get <Persona>(this.urlPersona + '/findId/'+personaId,this.httpOptions);
  }
//actualizar
  public updatePersona (persona:Persona): Observable<Persona>{
    return this.http.put <Persona>(this.urlPersona + '/updatePersona',persona,this.httpOptions);
  }
//delete
  public deletePersona(personaId :number): Observable<Persona>{
    return this.http.delete <Persona>(this.urlPersona + '/delete/'+personaId,this.httpOptions);
  }

}
