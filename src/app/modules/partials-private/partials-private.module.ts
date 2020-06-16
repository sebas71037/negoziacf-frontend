import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Modules
 */
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';

/**
 * Components
 */
import { PrivateHeaderComponent } from './private-header/private-header.component';

@NgModule({
  declarations: [
    PrivateHeaderComponent
  ],
  imports: [
    CommonModule,
    ClientBootstrapModule,
    RouterModule
  ],
  exports: [
    PrivateHeaderComponent
  ]
})
export class PartialsPrivateModule { }
