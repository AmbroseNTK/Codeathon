import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hasExp = false;
  hasDuration = false;

  public changeExp(event) {
    this.hasExp = event.checked;
    console.log(event);
  }

  public changeDuration(event) {
    this.hasDuration = event.checked;
  }

}
