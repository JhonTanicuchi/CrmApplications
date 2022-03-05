import { Injectable } from '@angular/core';
import { Etapa } from './etapa';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EtapaService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/etapa';

  constructor(private http: HttpClient) {}

  //Create
  public save(etapa: Etapa): Observable<Etapa> {
    return this.http.post<Etapa>(this.url + '/save', etapa, this.httpOptions);
  }

  //Read
  public findById(id: number): Observable<Etapa> {
    return this.http.get<Etapa>(this.url + '/id', this.httpOptions);
  }

  //Update
  public update(etapa: Etapa): Observable<Etapa> {
    return this.http.put<Etapa>(this.url + '/update', etapa, this.httpOptions);
  }

  //Delete
  public deleteById(id: number): Observable<Etapa> {
    return this.http.delete<Etapa>(
      this.url + '/deleteById/' + id,
      this.httpOptions
    );
  }

  //FinalAll
  public findAll(): Observable<Etapa[]> {
    return this.http.get<Etapa[]>(this.url + '/findAll', this.httpOptions);
  }

  public findAllBySeguimientoId(idSeguimeinto: number): Observable<Etapa[]> {
    return this.http.get<Etapa[]>(
      this.url + '/etapaPorSeguimiento/' + idSeguimeinto,
      this.httpOptions
    );
  }
}
