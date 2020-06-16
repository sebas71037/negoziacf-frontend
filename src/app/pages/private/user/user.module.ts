import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Modules
 */
import { UserRoutingModule } from './user-routing.module';
import { ClientBootstrapModule } from 'src/app/clients/client-bootstrap.module';
import { PipesModule } from '@pipe/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomLoaderModule } from '@module/custom-loader/custom-loader.module';
import { CustomModalModule } from '@module/custom-modal/custom-modal.module';
import { PartialsUserModule } from '@module/partials-user/partials-user.module';

/**
 * Components
 */
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ClientBootstrapModule,
    PipesModule,
    CustomLoaderModule,
    NgxPaginationModule,
    CustomModalModule,
    PartialsUserModule
  ]
})
export class UserModule { }
