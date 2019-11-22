import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import { WorkspaceModule } from '../workspace/workspace.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [PeopleComponent, ProfileComponent, ListComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    SharedModule,
    WorkspaceModule
  ]
})
export class PeopleModule { }
