import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpOptions =  {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url = environment.API_URL + "/cliente";

  constructor(
    private http: HttpClient
  ) { }

  //Create
  public save(cliente: Cliente): Observable<Cliente>
  {
    return this.http.post<Cliente>
    (this.url+"/save",cliente,this.httpOptions);
  }

  //Read
  public findById(id: number): Observable<Cliente>
  {
    return this.http.get<Cliente>(this.url+"/id", this.httpOptions);
  }

  //Update
  public update(cliente: Cliente): Observable<Cliente>
  {
    return this.http.put<Cliente>(this.url+"/update", cliente, this.httpOptions);
  }

  //Delete
  public deleteById(id: number): Observable<Cliente>
  {
    return this.http.delete<Cliente>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  //(FindAll)
  public findAll(): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.url+"/findAll", this.httpOptions);
  }

  public findAllByName(termino: string): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.url+"/findByName/"+termino, this.httpOptions);
  }

}
