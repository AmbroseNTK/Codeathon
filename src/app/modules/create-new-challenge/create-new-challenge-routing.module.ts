import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: CreateFormComponent,
  pathMatch: 'full'
},
{
  path: 'modify',
  component: ModifyFormComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewChallengeRoutingModule { }
