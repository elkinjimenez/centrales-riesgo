import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-datos-titular',
  templateUrl: './datos-titular.component.html',
  styleUrls: ['./datos-titular.component.css']
})
export class DatosTitularComponent implements OnInit {

  // VARIABLES:
  alerta = { texto: '', color: '', estado: false };
  tiposDocumento = [{ id: '1', nombre: 'C.C' }, { id: '4', nombre: 'C.E' }, { id: '5', nombre: 'Pasaporte' }, { id: '2', nombre: 'NIT' }];
  nombre = { valor: '', mensaje: '', color: '', estado: false };
  botonValidar = { texto: 'Validar Información', estado: false };
  imei: string;
  datosTitular = {
    tipodocumento: '',
    documentotitular: ''
  };

  constructor(
    @Host() @Optional() public init: AppComponent,
  ) { }

  ngOnInit(): void { }

  pruebaModal() {
    this.init.alerta = {
      color: 'alerta-negativa',
      icono: 'fa-info-circle',
      texto: 'Prueba mensaje estandar.'
    };
    $('#modalNotifica').modal('show');
  }

}
