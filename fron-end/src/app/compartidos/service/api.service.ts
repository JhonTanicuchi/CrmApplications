import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaComponent } from 'src/app/persona/persona.component';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.API_URL;
  private httpOptions = {

    headers: new HttpHeaders({ "Content-Type": "application/json" })

  }
  urlPersona = this.url + '/persona';

  constructor(private http: HttpClient) {
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
