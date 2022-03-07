import { Injectable } from '@angular/core';
import {Cotizacion} from './cotizacion';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

    private httpOptions =   {
      headers: new HttpHeaders ({"Content-Type":"application/json"})
    }

    private url = environment.API_URL + "/cotizacion";
 
    constructor(
     private http: HttpClient 
    ){ }


  //Create
  public save(cotizacion: Cotizacion): Observable<Cotizacion>
  {
    return this.http.post<Cotizacion>
    (this.url+"/save",cotizacion, this.httpOptions);
  }


  //Read
  public findById(id: number): Observable<Cotizacion>
  {
    return this.http.get<Cotizacion>(this.url+"/id", this.httpOptions );
  }

  //Update
  public update(cotizacion: Cotizacion ): Observable<Cotizacion>
  {
    return this.http.put<Cotizacion>(this.url+"/update", cotizacion, this.httpOptions);
    
  }

  //Delete
  public deleteById(id:number): Observable<Cotizacion>
  {
    return this.http.delete<Cotizacion>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  //FinalAll
    public findAll(): Observable<Cotizacion[]>
    {
        return this.http.get<Cotizacion[]>(this.url+"/findAll" , this.httpOptions)
    }

}
