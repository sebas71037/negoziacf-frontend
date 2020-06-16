import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { PublicRoutingModule } from './public-routing.module';;

/**
 * Components
 */
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
