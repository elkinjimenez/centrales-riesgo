import { Component } from '@angular/core';

@Component({
  selector: 'bloqueadorUI',
  styles: [`
    :host {
      text-align: center;
    }
  `],
  template: `
    <div class="block-ui-template">
    <div class="spinner-border text-secondary" role="status"></div>
    <div><strong>Cargando...</strong></div>
    </div>
  `
})
export class BloqueadorUIComponent {
}
