import { HttpGenericoService } from './HttpGenerico.service';
import { Injectable } from '@angular/core';
import { ReqPaymentreferences } from '../Models/flujoCentrales/req-paymentreferences';

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

  getInfoClient(detalleError: string, documento: string, tipoDocumento: string) {
    const descripService = '';
    const URL = this.servidor + 'http://100.126.19.74:8091/DEVQA/WsImeiTools/api/ImeiTools/ResourcesDomainApp_GET?getOperation=getInfoClient&message={"documentNumber":"' + documento + '","documentType":"' + tipoDocumento + '" } ';
    return this.httpGenerico.get(URL, descripService, detalleError);
  }

  getPaymentReferences(detalleError: string, data: ReqPaymentreferences) {
    const descripService = 'Consultar Pagos';
    const URL = this.servidor + 'http://100.126.19.74:8091/DEVQA/WsImeiTools/api/ImeiTools/ResourcesDomainApp_GET?getOperation=getpaymentreferences&message=' + JSON.stringify(data);
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
