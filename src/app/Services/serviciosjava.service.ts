import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosjavaService {

  servidor = '';

  constructor(
    private http: HttpClient,
  ) { }

  getTiposDocumento() {
    const URL = this.servidor + 'http://100.126.19.74:8091/DEVQA/WsImeiTools/api/ImeiTools/ResourcesDomainApp_GET?getOperation=typedocument&message=""';
    return this.http.get(URL);
  }
}
