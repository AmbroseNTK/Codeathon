import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewChallengeRoutingModule } from './create-new-challenge-routing.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { TestcasesTableComponent } from './testcases-table/testcases-table.component';
import { FormsModule } from '@angular/forms';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CreateFormComponent, TestcasesTableComponent, ModifyFormComponent],
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
    MatSelectModule,
    FormsModule
  ]
})
export class CreateNewChallengeModule { }
