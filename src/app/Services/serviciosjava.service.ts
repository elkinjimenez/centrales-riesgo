import { HttpGenericoService } from './HttpGenerico.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosjavaService {

  servidor = '';

  constructor(
    private httpGenerico: HttpGenericoService,
  ) { }

  getTiposDocumento(detalleError: string) {
    const descripService = 'consultar tipo de documentos';
    const URL = this.servidor + 'http://100.126.19.74:8091/DEVQA/WsImeiTools/api/ImeiTools/ResourcesDomainApp_GET?getOperation=typedocument&message=""';
    return this.httpGenerico.get(URL, descripService, detalleError);
  }

  // IDEA PARA CENTRALIZAR EL HEADERREQUEST
  headerRequest(body: boolean, bodyAnexo?: any) {
    return {
      headerRequest: {
        transactionId: 'string',
        system: 'string',
        target: 'string',
        user: 'string',
        password: 'string',
        requestDate: '2008-09-28T20:49:45',
        ipApplication: 'string',
        traceabilityId: 'string'
      }
    };
  }
}
