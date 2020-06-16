import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Modules
 */
import { CustomFormModule } from '@module/custom-form/custom-form.module';
import { CustomModalModule } from '@module/custom-modal/custom-modal.module';
import { CustomLoaderModule } from '@module/custom-loader/custom-loader.module';
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';
import { PipesModule } from '@pipe/pipes.module';

/**
 * Components
 */
import { UserManagerModalComponent } from './user-manager-modal/user-manager-modal.component';

@NgModule({
  declarations: [UserManagerModalComponent],
  imports: [
    CommonModule,
    ClientBootstrapModule,
    CustomFormModule,
    CustomModalModule,
    CustomLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [UserManagerModalComponent],
  entryComponents: [
    UserManagerModalComponent
  ]
})
export class PartialsUserModule { }
