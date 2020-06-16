import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Guards
 */
import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

/**
 * Components
 */
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
      path: '',
      component: PrivateComponent,
      canActivate: [
        LoginExistGuard
      ],
      data: {},
      children: [
        {
          path: 'user',
          loadChildren: './user/user.module#UserModule'
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
