import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './action-for-competition.component.html',
  styleUrls: ['./action-for-competition.component.scss']
})
export class ActionForCompetitionComponent implements OnInit {

  constructor(public bottomRef: MatBottomSheetRef<ActionForCompetitionComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit() {
  }

  onClick(event, element) {
    this.data.onAction(event, element);
    this.bottomRef.dismiss();
  }

}
