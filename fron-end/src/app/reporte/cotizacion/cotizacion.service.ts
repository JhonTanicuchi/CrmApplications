import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cotizacion } from './cotizacion';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private url: string = environment.API_URL + "/cotizacionReporte";

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  }

  constructor(
    private http: HttpClient
  ) { }

  save(cotizacion: Cotizacion): Observable<Cotizacion>
  {
    return this.http.post<Cotizacion>(this.url+"/save", cotizacion, this.httpOptions);
  }

  getPdf(id: number): Observable<Blob>
  {
    let headers = new HttpHeaders();
    headers = headers.set("Accept","application/pdf");
    return this.http.get<Blob>(this.url+"/cotizacionPDF/"+id,{ headers: headers, responseType: 'blob' as 'json' })

  }

}
