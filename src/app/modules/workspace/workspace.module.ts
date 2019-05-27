import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import {CodingComponent} from './coding/coding.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import {CovalentCodeEditorModule} from '@covalent/code-editor';
import {FormsModule} from '@angular/forms';
import { SolutionDialogComponent } from './solution-dialog/solution-dialog.component';

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
    MatProgressSpinnerModule
  ],
  entryComponents:[SolutionDialogComponent]
})
export class WorkspaceModule { }
