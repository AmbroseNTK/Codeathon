import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
},
{
  path: 'create-challenge',
  loadChildren: () => import('./modules/create-new-challenge/create-new-challenge.module').then(m => m.CreateNewChallengeModule),
  canActivate: [AuthGuard]
},
{
  path: 'explore',
  loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule)
},
{
  path: 'solving',
  loadChildren: () => import('./modules/workspace/workspace.module').then(m => m.WorkspaceModule)
},
{
  path: 'personal',
  loadChildren: () => import('./modules/personal/personal.module').then(m => m.PersonalModule)
},
{ path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
{
  path: '',
  redirectTo: 'explore',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
