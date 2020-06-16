import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Modules
 */
import { RegisterRoutingModule } from './register-routing.module';
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';
import { CustomFormModule } from '@module/custom-form/custom-form.module';
import { CustomLoaderModule } from '@module/custom-loader/custom-loader.module';

/**
 * Components
 */
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ClientBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormModule,
    CustomLoaderModule
  ]
})
export class RegisterModule { }
