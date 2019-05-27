import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewChallengeRoutingModule } from './create-new-challenge-routing.module';
import { CreateFormComponent } from './create-form/create-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatFormFieldModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { TestcasesTableComponent } from './testcases-table/testcases-table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CreateFormComponent, TestcasesTableComponent],
  imports: [
    CommonModule,
    CreateNewChallengeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ]
})
export class CreateNewChallengeModule { }
