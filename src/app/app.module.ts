import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { FlujoCentralesModule } from './Modules/flujoCentrales/flujo-centrales.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpGenericoService } from './Services/HttpGenerico.service';
import { BloqueadorUIComponent } from './Shared/Components/blockui/bloqueadorUI.component';
import { UtilService } from './Services/util.service';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    BloqueadorUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
    FlujoCentralesModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      template: BloqueadorUIComponent
    })
  ],
  providers: [
    HttpGenericoService,
    UtilService
  ],
  entryComponents: [
    BloqueadorUIComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
