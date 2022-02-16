import { Seguimiento } from './../models/seguimiento';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.API_URL;

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  urlSeguimiento = this.url + '/seguimiento';

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

}
