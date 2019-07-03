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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CreateFormComponent, TestcasesTableComponent, ModifyFormComponent, DeleteConfirmationComponent],
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
    MatCheckboxModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [DeleteConfirmationComponent]
})
export class CreateNewChallengeModule { }
