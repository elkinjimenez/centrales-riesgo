import { Component, OnInit, Input } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-modal-notifica',
  templateUrl: './modal-notifica.component.html',
  styleUrls: ['./modal-notifica.component.css']
})
export class ModalNotificaComponent implements OnInit {

  @Input() alerta = { texto: '', color: '', icono: '' };

  constructor() { }

  ngOnInit(): void {
  }

  clean() {
    this.alerta.texto = '';
    this.alerta.color = '';
    this.alerta.icono = '';
  }

  show() {
    console.log('Estoy por aca en el modal');
    console.log(this.alerta.texto);
    console.log(this.alerta.color);
    console.log(this.alerta.icono);
    $('#modalNotifica').modal('show');
  }

}
