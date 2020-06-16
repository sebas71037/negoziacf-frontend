import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Resolvers
 */
import { PhoneTypeResolverService } from '@resolver/phone-type/phone-type-resolver.service';

/**
 * Components
 */
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      phoneTypeList: PhoneTypeResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
