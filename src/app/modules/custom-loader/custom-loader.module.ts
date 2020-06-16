import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';

/**
 * Components
 */
import { SimpleLoaderComponent } from './simple-loader/simple-loader.component';

@NgModule({
  declarations: [
    SimpleLoaderComponent
  ],
  imports: [
    CommonModule,
    ClientBootstrapModule
  ],
  exports: [
    SimpleLoaderComponent
  ]
})
export class CustomLoaderModule { }
