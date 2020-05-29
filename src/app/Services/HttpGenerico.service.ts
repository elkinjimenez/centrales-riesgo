import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { BloqueadorUIService } from './bloqueadorUI.service';
import { ModalNotificaComponent } from '../Shared/Components/modal-notifica/modal-notifica.component';


@Injectable()
export class HttpGenericoService {
  constructor(
    public http: HttpClient,
    private bloqueadorService: BloqueadorUIService,
    private message: ModalNotificaComponent
  ) {
  }

  get(endPoint: string, descripService: string, detalleError: string): Observable<any> {
    this.bloqueadorService.bloquearUI();
    return this.http.get(endPoint)
      .pipe(
        catchError(err => {
          return this.onCatchError(err, descripService, detalleError);
        }),
        finalize(() => {
          this.bloqueadorService.desbloquearUI();
        })
      );
  }

  post(endPoint: string, body: any, descripService: string, detalleError: string): Observable<any> {
    this.bloqueadorService.bloquearUI();
    return this.http.post(endPoint, body)
      .pipe(
        catchError(err => {
          return this.onCatchError(err, descripService, detalleError);
        }),
        finalize(() => {
          this.bloqueadorService.desbloquearUI();
        })
      );
  }

  put(endPoint: string, body: any, descripService: string, detalleError: string): Observable<any> {
    this.bloqueadorService.bloquearUI();
    return this.http.put(endPoint, body)
      .pipe(
        catchError(err => {
          return this.onCatchError(err, descripService, detalleError);
        }),
        finalize(() => {
          this.bloqueadorService.desbloquearUI();
        })
      );
  }


  private onCatchError(response, descripService, detalleError): Observable<any> {
    this.message.clean();
    this.message.alerta.icono = 'fas fa-times';
    this.message.alerta.color = 'alerta-negativa';

    if (response.status === 0) {
      console.log('Estado: error, texto: Error del sistema: no hay conexión con el servidor');
      this.message.alerta.texto = 'Hola karold';
      this.message.show();
      return EMPTY;
    } else if (response.status === 400) {
      let mensajes = response.error;
      mensajes.forEach(mensaje => {
        // AGREGAR LOS ERRORES EN UNA VARIABLE DE MENSAJES PARA EL CLIENTE
      });
      return EMPTY;
    } else if (response.status === 401) {
      console.log('Estado: error, texto: Su sesión ha caducado');
      // RETORNAR AL LOGIN
    } else if (response.status === 403) {
      console.log('Estado: error, texto: No autorizado para acceder a este recurso');
      return EMPTY;
    } else if (response.status === 404) {
      console.log('Estado: error, texto: recurso no encontrado');
      return EMPTY;
    } else if (response.status === 500) {
      console.log('Estado: error, texto: Error del sistema: por favor contacte al administrador');
      return EMPTY;
    }
    return throwError(response);
  }
}
