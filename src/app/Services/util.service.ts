import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

declare var jQuery: any;
declare var $: any;

@Injectable()
export class UtilService {
  @BlockUI() blockUI: NgBlockUI;
  alerta = {} as Alerta;

  constructor() { }

  // FUNCION DE BLOQUEAR PANTALLA
  bloquearUI() {
    this.blockUI.start();
  }

  desbloquearUI() {
    this.blockUI.stop();
  }

  // FUNCION DE MOSTRAR MENSAJES
  limpiarModal() {
    this.alerta = {
      color: '',
      texto: '',
      icono: '',
    };
  }

  lanzarModal() {
    $('#modalNotifica').modal('show');
  }

}

interface Alerta {
  color: string;
  icono: string;
  texto: string;
}
