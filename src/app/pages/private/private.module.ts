import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { PrivateRoutingModule } from './private-routing.module';
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';
import { PartialsPrivateModule } from '@module/partials-private/partials-private.module';

/**
 * Components
 */
import {PrivateComponent} from './private.component';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ClientBootstrapModule,
    PartialsPrivateModule
  ]
})
export class PrivateModule { }
