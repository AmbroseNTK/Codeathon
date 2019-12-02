import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dataSource = new MatTableDataSource();

  @Input()
  set dataList(data: []) {
    this.dataSource = new MatTableDataSource(data);
  }

  @Input()
  cols = [];

  @Input()
  actions = [];

  @Input()
  hasSearch = true;

  @Output()
  onAction = new EventEmitter<ActionTableButton>();

  public onClickAction(index, element, action) {
    this.onAction.emit(new ActionTableButton(index, element, action));
  }

  public getDisplayColumns() {
    let result = [];
    for (let i = 0; i < this.cols.length; i++) {
      result.push(this.cols[i].name);
    }
    for (let i = 0; i < this.actions.length; i++) {
      result.push(this.actions[i].name);
    }
    return result;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export class ActionTableButton {
  constructor(public index: Number, public element, public action: { name: string, title: string, color?: string }) { }
}