import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../workspace/solution-dialog/solution-dialog.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CategoryListComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CategoryListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit() {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelect() {

  }

}
