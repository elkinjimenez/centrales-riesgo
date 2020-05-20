import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-finalizar-atencion',
  templateUrl: './finalizar-atencion.component.html',
  styleUrls: ['./finalizar-atencion.component.css']
})
export class FinalizarAtencionComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  finalizarAtencion() {
    $('#modalFinalizarAtencion').modal('show');
  }

}
