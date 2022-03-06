import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Pedido } from "./pedido";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url: string = environment.API_URL + "/pedido";

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  }

  constructor(
    private http: HttpClient
  ) { }

  save(pedido: Pedido): Observable<Pedido>
  {
    return this.http.post<Pedido>(this.url+"/save", pedido, this.httpOptions);
  }


}