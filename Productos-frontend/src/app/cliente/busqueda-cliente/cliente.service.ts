import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  url = environment.API_URL + '/cliente';

  constructor(private http:HttpClient) { }


  //buscar
  public findAllByName(termino:string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+"/findByName/"+termino , this.httpOptions);
  }

}
