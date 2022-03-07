import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  url = environment.API_URL + '/api/producto';

  constructor(private http: HttpClient) {}

  //create
  public save(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(
      this.url + '/save',
      producto,
      this.httpOptions
    );
  }

  //Read
  public findById(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/id', this.httpOptions);
  }

  //Update

  public update(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url+"/update",producto,this.httpOptions);
  }
  //delete

  public deleteById(id: number): Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/deleteById/'+id, this.httpOptions);
  }

  //(FindAll)
  public findAll (): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+"/findAll",this.httpOptions);
  }

  // buscar
  public findAllByName (termino :string): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+"/findByName/"+termino , this.httpOptions);
  }
  findByName(termino:string): Observable<Producto[]>{
   return this.http.get<Producto[]>(this.url+"/findByName/"+termino,this.httpOptions);
  }
}
