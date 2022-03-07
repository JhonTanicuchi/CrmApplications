import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }
  
  private url = environment.API_URL + "/rol";

  constructor(
    private http: HttpClient
  ) { }
  
  //Create
  public save(rol: Rol): Observable<Rol>
  {
    return this.http.post<Rol>
    (this.url+"/save",rol,this.httpOptions);
  }

  //Read
  public findById(id: number): Observable<Rol>
  {
    return this.http.get<Rol>(this.url + '/' + id, this.httpOptions);
  }

  //Update
  public update(rol: Rol): Observable<Rol>
  {
    return this.http.put<Rol>(this.url+"/update", rol, this.httpOptions);
  }

  //Delete
  public deleteById(id: number): Observable<Rol>
  {
    return this.http.delete<Rol>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  //(FindAll)
  public findAll(): Observable<Rol[]>
  {
    return this.http.get<Rol[]>(this.url+"/findAll", this.httpOptions);
  }


}
