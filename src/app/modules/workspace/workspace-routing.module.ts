import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodingComponent} from './coding/coding.component';

const routes: Routes = [{
  path:':challengeID',
  component:CodingComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
