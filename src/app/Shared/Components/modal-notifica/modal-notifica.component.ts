import { Component } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';


@Component({
  selector: 'app-modal-notifica',
  templateUrl: './modal-notifica.component.html',
  styleUrls: ['./modal-notifica.component.css']
})
export class ModalNotificaComponent {

  constructor(
    public utilService: UtilService
  ) { }


}
