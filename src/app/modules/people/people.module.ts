import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { ExploreComponent } from './explore/explore.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeopleComponent, ExploreComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ]
})
export class PeopleModule { }
