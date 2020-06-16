import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import { RegisterComponent } from './register.component';

import { PhoneTypeResolverService } from '@resolver/phone-type/phone-type-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    resolve: {
      phoneTypeList: PhoneTypeResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
