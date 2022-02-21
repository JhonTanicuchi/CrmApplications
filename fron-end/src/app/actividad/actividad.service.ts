 import { Injectable } from '@angular/core';
 import { Actividad } from './actividad';
 import { Observable } from 'rxjs';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }
  private url = environment.API_URL + "/actividad"; // la url indica donde se va hacer la peticion
 
  constructor(
    private  http: HttpClient //este va ayudar hacer las peticiones  http
  ) { }

  //Create
  public save(actividad: Actividad): Observable<Actividad>
  {
    return this.http.post<Actividad>
    (this.url + "/save", actividad, this.httpOptions);
  }

  //Read
  public findById (id : number): Observable<Actividad>
  {
    return this.http.get<Actividad>(this.url + "/id" , this.httpOptions);
  }

  //Update
  public update(actividad : Actividad):Observable<Actividad>
  {
    return this.http.put<Actividad>(this.url + "/update", actividad, this.httpOptions);
  }

  //Delete
  public deleteById (id: number):Observable<Actividad>
  {
    return this.http.delete<Actividad>(this.url + "/deleteById/" + id, this.httpOptions);
  }

  //findAll
  public findAll():Observable<Actividad[]> //Va resivir un arreglo de muchas actividaDes
  {
    return this.http.get<Actividad[]>(this.url + "/findAll", this.httpOptions);
  }


}
