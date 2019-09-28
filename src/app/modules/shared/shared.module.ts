import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimeToDatePipe } from './pipes/time-to-date.pipe';

@NgModule({
  declarations: [ChallengeListComponent, TimeToDatePipe],
  exports: [
    ChallengeListComponent,
    TimeToDatePipe
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
