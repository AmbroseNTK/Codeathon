import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  language:string;
  code:string;
}

@Component({
  selector: 'app-solution-dialog',
  templateUrl: './solution-dialog.component.html',
  styleUrls: ['./solution-dialog.component.scss']
})
export class SolutionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SolutionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
