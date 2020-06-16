import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Guards
 */
import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

/**
 * Components
 */
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent, canActivate: [], data: {}, children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [
          LoginExistGuard
        ],
        data: {
          caseLoginExist: 2
        }
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
        canActivate: [
          LoginExistGuard
        ],
        data: {
          caseLoginExist: 2
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
