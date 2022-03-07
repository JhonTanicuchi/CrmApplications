import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/usuario';

  constructor(private http: HttpClient) {}

  //Create
  public save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      this.url + '/save',
      usuario,
      this.httpOptions
    );
  }

  //Read
  public findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + '/id', this.httpOptions);
  }

  //Update
  public update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      this.url + '/update',
      usuario,
      this.httpOptions
    );
  }

  //Delete
  public deleteById(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(
      this.url + '/deleteById/' + id,
      this.httpOptions
    );
  }

  //FinalAll
  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + '/findAll', this.httpOptions);
  }
}
