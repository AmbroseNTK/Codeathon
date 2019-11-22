import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { CodingComponent } from './coding/coding.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MarkdownModule } from 'ngx-markdown';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { FormsModule } from '@angular/forms';
import { SolutionDialogComponent } from './solution-dialog/solution-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CodingComponent, SolutionDialogComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    MatCardModule,
    MarkdownModule.forChild(),
    CovalentCodeEditorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  entryComponents: [SolutionDialogComponent],
  exports: [SolutionDialogComponent]
})
export class WorkspaceModule { }
