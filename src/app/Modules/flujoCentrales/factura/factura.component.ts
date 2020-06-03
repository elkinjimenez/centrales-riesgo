import { Component, OnInit, OnDestroy } from '@angular/core';
import { RespGeneral } from 'src/app/Models/flujoCentrales/resp-general';
import { RespPaymentreferences } from 'src/app/Models/flujoCentrales/resp-paymentreferences';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { UtilService } from 'src/app/Services/util.service';
import { Subscription } from 'rxjs';

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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
