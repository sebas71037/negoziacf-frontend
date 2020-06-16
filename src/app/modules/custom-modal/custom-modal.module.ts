import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { PipesModule } from '@pipe/pipes.module';

/**
 * Components
 */
import { ModalLayoutComponent } from './modal-layout/modal-layout.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    ModalLayoutComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ModalLayoutComponent,
    ConfirmModalComponent
  ],
  entryComponents: [
    ModalLayoutComponent,
    ConfirmModalComponent
  ]
})
export class CustomModalModule { }
