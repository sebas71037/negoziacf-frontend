import { Component, Input, Output, EventEmitter } from '@angular/core';

/* Modules */
import { ModalDirective } from 'ngx-bootstrap';

/**
 * Libraries
 */
import { ModalCore } from '@lib/ModalCore';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.sass']
})
export class ConfirmModalComponent extends ModalCore {

  @Input() title: string;
  @Input() description: string;
  @Input() data: any;
  @Input() acceptText = 'Aceptar';
  @Input() acceptColor = 'primary';

  constructor() {
    super();
  }

  accept() {
    this.closeModal(this.data);
  }

}
