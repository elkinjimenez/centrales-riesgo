import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosTitularComponent } from './datos-titular/datos-titular.component';
import { ConsultaCentralesComponent } from './consulta-centrales/consulta-centrales.component';

@NgModule({
  declarations: [
    DatosTitularComponent,
    ConsultaCentralesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatosTitularComponent
  ]
})
export class FlujoCentralesModule { }
