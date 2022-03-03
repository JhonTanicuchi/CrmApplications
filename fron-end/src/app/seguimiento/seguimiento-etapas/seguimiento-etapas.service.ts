import { EtapaPersona } from './etapa-persona';
import { EtapaSeguimiento } from './etapa-seguimiento';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoEtapasService {

  url = environment.API_URL;

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  urlEtapaPersona = this.url + '/etapaPersona';

  constructor(private http: HttpClient) { }

  public listarEtapasDeSeguimiento(idSeguimiento: number): Observable<EtapaSeguimiento[]>{
    return this.http.get<EtapaSeguimiento[]>(this.urlEtapaPersona+'/getEtapaSeguimiento/'+idSeguimiento,this.httpOptions);
  }

  public createEtapaPersona(nuevaEtapaPersona: EtapaPersona):  Observable<EtapaPersona>{
    return this.http.post<EtapaPersona>(this.urlEtapaPersona+'/save',nuevaEtapaPersona,this.httpOptions);
  }

  public updateSeguimiento(etapaPersona: EtapaPersona):Observable<EtapaPersona>{
    return this.http.put<EtapaPersona>(this.urlEtapaPersona+'/updateEtapaPersona',etapaPersona,this.httpOptions)
  }

  /* public getSeguimientoById(idSeguimiento: number):Observable<Seguimiento>{
    return this.http.get<Seguimiento>(this.urlSeguimiento+'/findById/'+idSeguimiento,this.httpOptions);
  }

  public createSeguimiento(seguimiento: Seguimiento):Observable<Seguimiento>{
    return this.http.post<Seguimiento>(this.urlSeguimiento+'/save',seguimiento,this.httpOptions);
  }

  public updateSeguimiento(seguimiento: Seguimiento):Observable<Seguimiento>{
    return this.http.put<Seguimiento>(this.urlEtapaPersona+'/put',seguimiento,this.httpOptions)
  }

  public deleteSeguimiento(idSeguimiento: number):Observable<Seguimiento>{
    return this.http.put<Seguimiento>(this.urlSeguimiento+'/delete/'+idSeguimiento,null,this.httpOptions);
  } */
}
