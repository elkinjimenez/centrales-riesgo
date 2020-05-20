import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseConocimientoComponent } from './Components/base-conocimiento/base-conocimiento.component';
import { ModalNotificaComponent } from './Components/modal-notifica/modal-notifica.component';
import { FinalizarAtencionComponent } from './Components/finalizar-atencion/finalizar-atencion.component';

@NgModule({
  declarations: [
    BaseConocimientoComponent,
    ModalNotificaComponent,
    FinalizarAtencionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseConocimientoComponent,
    ModalNotificaComponent,
    FinalizarAtencionComponent
  ]
})
export class SharedModule { }
