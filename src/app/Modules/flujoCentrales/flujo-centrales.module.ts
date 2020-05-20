import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatosTitularComponent } from './datos-titular/datos-titular.component';
import { ConsultaCentralesComponent } from './consulta-centrales/consulta-centrales.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [
    DatosTitularComponent,
    ConsultaCentralesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule

  ],
  exports: [
    DatosTitularComponent
  ]
})
export class FlujoCentralesModule { }
