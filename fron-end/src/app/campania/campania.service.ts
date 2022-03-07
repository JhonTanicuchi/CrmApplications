import { Injectable } from '@angular/core';
import { Campania } from './campania';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CampaniaService {

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url = environment.API_URL + "/campania";

  constructor(
    private http: HttpClient
  ) { }

  //Create
  public save(campania: Campania): Observable<Campania>
  {
    return this.http.post<Campania>
    (this.url+"/save",campania,this.httpOptions);
  }

  //Read
  public findById(id: number): Observable<Campania>
  {
    return this.http.get<Campania>(this.url+"/id", this.httpOptions);
  }

  //Update
  public update(campania: Campania): Observable<Campania>
  {
    return this.http.put<Campania>(this.url+"/update", campania, this.httpOptions);
  }

  //Delete
  public deleteById(id: number): Observable<Campania>
  {
    return this.http.delete<Campania>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  //(FindAll)
  public findAll(): Observable<Campania[]>
  {
    return this.http.get<Campania[]>(this.url+"/findAll", this.httpOptions);
  }
}
