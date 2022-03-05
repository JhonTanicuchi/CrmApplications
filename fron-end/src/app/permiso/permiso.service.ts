import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Permiso } from './permiso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermisoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/permiso';

  constructor(private http: HttpClient) {}

  //Create
  public save(permiso: Permiso): Observable<Permiso> {
    return this.http.post<Permiso>(
      this.url + '/save',
      permiso,
      this.httpOptions
    );
  }

  //Read
  public findById(id: number): Observable<Permiso> {
    return this.http.get<Permiso>(this.url + '/id', this.httpOptions);
  }

  //Update
  public update(permiso: Permiso): Observable<Permiso> {
    return this.http.put<Permiso>(
      this.url + '/update',
      permiso,
      this.httpOptions
    );
  }

  //Delete
  public deleteById(id: number): Observable<Permiso> {
    return this.http.delete<Permiso>(
      this.url + '/deleteById/' + id,
      this.httpOptions
    );
  }

  //(FindAll)
  public findAll(): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(this.url + '/findAll', this.httpOptions);
  }

  public findByRolId(id: number): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(
      this.url + '/findByRolId/' + id,
      this.httpOptions
    );
  }
}
