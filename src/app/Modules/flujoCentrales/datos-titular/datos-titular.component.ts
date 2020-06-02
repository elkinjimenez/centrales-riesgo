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

  botonValidar = { texto: 'Validar Información', estado: false };
  imei: string;
  datosTitular = {
    documento: {},
    tipoDocumento: {},
    nombre: {},
    fechaInicio: {},
    fechaFin: {},
  } as DatosTitular;

  constructor(
    private servicios: ServiciosjavaService,
    private util: UtilService,
  ) {
    // VARIABLES SESSIONSTORAGE

    const tipo = sessionStorage.getItem('documentType');
    if (tipo !== undefined) { this.datosTitular.tipoDocumento.valor = tipo; }

    const numero = sessionStorage.getItem('documentNumber');
    if (numero !== undefined) { this.datosTitular.documento.valor = numero; }

  }

  ngOnInit() {

    // INICIALIZANDO VARIABLES
    this.datosTitular.fechaInicio.campo = true;
    this.datosTitular.fechaFin.campo = true;
    this.datosTitular.nombre.campo = true;
    this.datosTitular.tipoDocumento.campo = true;
    this.datosTitular.documento.campo = true;

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
    if (this.datosTitular.nombre.valor !== '') {
      this.datosTitular.nombre.color = 'text-success';
      this.datosTitular.nombre.mensaje = 'Válido';
      this.datosTitular.nombre.estado = true;
      console.log('OK');
    } else {
      this.datosTitular.nombre.color = 'text-danger';
      this.datosTitular.nombre.mensaje = 'No puede estar vacío.';
      this.datosTitular.nombre.estado = false;
    }
    this.valDatos();
  }

  valDatos() {
    if (this.datosTitular.nombre.estado) {
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
    this.servicios.getInfoClient(errorM, this.datosTitular.documento.valor, this.datosTitular.tipoDocumento.valor).subscribe(
      data => {
        console.log('Datos de GetInfoClient: ', data);
        this.responseGeneral = data as RespGeneral;
        this.responseGetInfoClient = JSON.parse(this.responseGeneral.message);
        if (this.responseGeneral.isValid) {
          if (this.responseGetInfoClient.isValid) {
            this.datosTitular.nombre.valor = this.responseGetInfoClient.firstName + ' ' + this.responseGetInfoClient.firstSurname;
            this.datosTitular.nombre.campo = false;
            this.datosTitular.tipoDocumento.campo = false;
            this.datosTitular.documento.campo = false;
          } else {
            this.util.alerta = {
              color: 'alerta-negativa',
              icono: 'fas fa-info-circle',
              texto: this.responseGetInfoClient.description + '. Por favor intente de nuevo.'
            };
            this.util.lanzarModal();
          }
        } else {
          this.util.alerta = {
            color: 'alerta-negativa',
            icono: 'fas fa-info-circle',
            texto: this.responseGetInfoClient.description + '. Por favor intente de nuevo.'
          };
          this.util.lanzarModal();
        }
      }, error => {
        console.log('Error GetInfoClient: ', error);
        this.util.alerta = {
          color: 'alerta-negativa',
          icono: 'fas fa-info-circle',
          texto: 'No se logró consultar los datos del cliente. Por favor intente de nuevo.'
        };
        this.util.lanzarModal();
      }
    );
  }

}
