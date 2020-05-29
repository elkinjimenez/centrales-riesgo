import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable()
export class BloqueadorUIService {
  @BlockUI() blockUI: NgBlockUI;

  constructor() { }

  bloquearUI() {
    this.blockUI.start();
  }

  desbloquearUI() {
    this.blockUI.stop();
  }
}
