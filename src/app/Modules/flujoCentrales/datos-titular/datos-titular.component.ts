import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiciosjavaService } from 'src/app/Services/serviciosjava.service';
import { RespGeneral } from 'src/app/Models/flujoCentrales/resp-general';
import { TipoDocumento } from 'src/app/Models/flujoCentrales/tipo-documento';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/Services/util.service';
import { RespGetInfoClient } from 'src/app/Models/flujoCentrales/resp-get-info-client';
import { DatosTitular } from 'src/app/Models/flujoCentrales/datos-titular';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-datos-titular',
  templateUrl: './datos-titular.component.html',
  styleUrls: ['./datos-titular.component.css']
})
export class DatosTitularComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  // DE LOS SERVICIOS
  responseGeneral: RespGeneral;
  responseGetInfoClient: RespGetInfoClient;

  // VARIABLES:
  tiposDocumento: TipoDocumento[];
  consultaCentrales: boolean;
  alerta = { texto: '', color: '', estado: false };
  nombre = { valor: '', mensaje: '', color: '', estado: false };
  botonValidar = { texto: 'Validar Información', estado: false };
  imei: string;
  datosTitular = {} as DatosTitular;

  constructor(
    private servicios: ServiciosjavaService,
    private util: UtilService,
  ) {
    // VARIABLES SESSIONSTORAGE

    const tipo = sessionStorage.getItem('documentType');
    if (tipo !== undefined) { this.datosTitular.tipoDocumento = tipo; }

    const numero = sessionStorage.getItem('documentNumber');
    if (numero !== undefined) { this.datosTitular.documento = numero; }

  }

  ngOnInit() {
    this.consumirTiposDocumento();
    this.consumirGetInfoClient();
  }

  pruebaModal() {
    this.util.limpiarModal();
    this.util.alerta = {
      color: 'alerta-negativa',
      icono: 'fa-info-circle',
      texto: 'El usuario está reportado negativamente en centrales de riesgo.'
    };
    this.util.lanzarModal();
    this.consultaCentrales = true;
  }

  consumirTiposDocumento() {
    this.subscription = this.servicios.getTiposDocumento('').subscribe(
      data => {
        console.log('Listado tipos documento: ', data);
        this.responseGeneral = data as RespGeneral;
        if (this.responseGeneral.isValid) {
          this.tiposDocumento = JSON.parse(this.responseGeneral.message);
          if (this.tiposDocumento[0].Description === ' ') {
            this.tiposDocumento.shift();
          }
        } else {

        }
      }, error => {
        console.log('Error lista tipos documento: ', error);
      },
    );
  }

  nombreUsuario() {
    if (this.nombre.valor !== '') {
      this.nombre.color = 'text-success';
      this.nombre.mensaje = 'Válido';
      this.nombre.estado = true;
      console.log('OK');
    } else {
      this.nombre.color = 'text-danger';
      this.nombre.mensaje = 'No puede estar vacío.';
      this.nombre.estado = false;
    }
    this.valDatos();
  }

  valDatos() {
    if (this.nombre.estado) {
      this.botonValidar.estado = true;
    } else {
      this.botonValidar.estado = false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  consumirGetInfoClient() {
    const errorM = 'Error al consultar los datos del titular.';
    this.servicios.getInfoClient(errorM, this.datosTitular.documento, this.datosTitular.tipoDocumento).subscribe(
      data => {
        console.log('Datos de GetInfoClient: ', data);
        this.responseGeneral = data as RespGeneral;
        if (this.responseGeneral.isValid) {
          this.responseGetInfoClient = JSON.parse(this.responseGeneral.message);
          if (this.responseGetInfoClient.isValid) {
            this.nombre.valor = this.responseGetInfoClient.firstName;
          }
        }
      }, error => {
        console.log('Error GetInfoClient: ', error);
      }
    );
  }

}
