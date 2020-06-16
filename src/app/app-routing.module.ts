import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import {NotFoundComponent} from '@page/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '', loadChildren: './pages/private/private.module#PrivateModule', canActivate: [], data: { } },
  { path: '', loadChildren: './pages/public/public.module#PublicModule', canActivate: [], data: { } },
  { path: '**', component: NotFoundComponent, data: { sectionSlug: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
