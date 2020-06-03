import { Component, OnInit, OnDestroy } from '@angular/core';
import { RespGeneral } from 'src/app/Models/flujoCentrales/resp-general';
import { RespPaymentreferences } from 'src/app/Models/flujoCentrales/resp-paymentreferences';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { UtilService } from 'src/app/Services/util.service';
import { Subscription } from 'rxjs';
import { ReqPaymentreferences } from 'src/app/Models/flujoCentrales/req-paymentreferences';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  // DE LOS SERVICIOS
  responseGeneral: RespGeneral;
  responsepaymentreferences: RespPaymentreferences;

  // VARIABLES:

  constructor(
    private servicios: ServiciosjavaService,
    private util: UtilService,
  ) { }

  ngOnInit(): void {
  }

  consumirPaymentReferences() {
    const errorM = 'Error al consultar factura.';
    const request = {
      headerRequest: {
        channel: '',
        idApplication:'',
      },
      subscriberNumber: ''
    } as ReqPaymentreferences;
    this.subscription = this.servicios.getPaymentReferences(errorM, request).subscribe(
      data => {
        console.log('Datos Factura: ', data);
        this.responseGeneral = data as RespGeneral;
        this.responsepaymentreferences = JSON.parse(this.responseGeneral.message);
        if (this.responseGeneral.isValid) {
          if(this.responsepaymentreferences.responseStatus.message === 'Transaction Complete'){
              console.log('paso por aqui');
          }
        } else {

        }
      }, error => {
        console.log('Error factura: ', error);
      },
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
