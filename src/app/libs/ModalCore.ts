import { ViewChild, Output, EventEmitter } from '@angular/core';

/**
 * Libs
 */
import { ComponentCore } from './ComponentCore';

/**
 * Components
 */
import { ModalLayoutComponent } from '@module/custom-modal/modal-layout/modal-layout.component';

export class ModalCore extends ComponentCore {

  /* Modal layout reference */
  @ViewChild('modalLayout') modalLayout: ModalLayoutComponent;

  @Output() responseEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  /**
   * Close modal component
   * @param response: Response of close modal
   */
  closeModal(response: any = null): void {
    this.modalLayout.closeModal();
    this.responseEvent.emit(response);
  }

}
