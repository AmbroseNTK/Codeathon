import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal.component';
import { CompetitionComponent } from './competition/competition.component';

const routes: Routes = [{
  path: '', component: PersonalComponent, children: [
    {
      path: "competition",
      component: CompetitionComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
