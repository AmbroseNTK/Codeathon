import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateFormComponent} from './create-form/create-form.component';

const routes: Routes = [{
  path:'',
  component:CreateFormComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewChallengeRoutingModule { }
