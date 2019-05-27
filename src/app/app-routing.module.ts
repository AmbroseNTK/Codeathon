import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: './modules/login/login.module#LoginModule'
},
  {
    path: 'create-challenge',
    loadChildren: './modules/create-new-challenge/create-new-challenge.module#CreateNewChallengeModule'
  },
  {
    path:'explore',
    loadChildren:'./modules/explore/explore.module#ExploreModule'
  },
  {
    path:'solving',
    loadChildren:'./modules/workspace/workspace.module#WorkspaceModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
