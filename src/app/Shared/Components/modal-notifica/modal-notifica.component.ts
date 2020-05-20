import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-notifica',
  templateUrl: './modal-notifica.component.html',
  styleUrls: ['./modal-notifica.component.css']
})
export class ModalNotificaComponent implements OnInit {

  @Input() alerta = { texto: '', color: '', icono: '' };

  constructor() { }

  ngOnInit(): void { }

}
