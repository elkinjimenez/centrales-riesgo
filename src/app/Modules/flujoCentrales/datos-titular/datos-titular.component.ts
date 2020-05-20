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
  confirmar() {
    // this.botonValidar.estado = true;
    console.log ('CHECK!');
  }

  nombreUsuario() {
    if (this.nombre.valor !== '') {
      this.nombre.color = 'text-success';
      this.nombre.mensaje = 'Válido';
      this.nombre.estado = true;
      console.log ('OK');
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

}
