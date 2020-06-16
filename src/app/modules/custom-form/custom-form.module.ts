import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Components
 */
import { ControlMessageInputComponent } from './control-message-input/control-message-input.component';

@NgModule({
  declarations: [
    ControlMessageInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlMessageInputComponent
  ]
})
export class CustomFormModule { }
