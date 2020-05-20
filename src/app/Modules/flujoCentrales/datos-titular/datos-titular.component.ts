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
