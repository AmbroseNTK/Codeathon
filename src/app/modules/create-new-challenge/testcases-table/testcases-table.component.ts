import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Testcase } from '../../../states/models/testcase.model';

@Component({
  selector: 'app-testcases-table',
  templateUrl: './testcases-table.component.html',
  styleUrls: ['./testcases-table.component.scss']
})
export class TestcasesTableComponent implements OnInit {

  @Input()
  challengeID: string;

  data: Array<Testcase>;

  @Input('data')
  set setData(list: Array<Testcase>) {
    this.data = list;
    this.reload();
  }

  @Output()
  dataChanged: EventEmitter<Array<Testcase>> = new EventEmitter<Array<Testcase>>();

  dataSource: MatTableDataSource<Testcase>;
  input: string;
  output: string;
  isPublic: boolean = false;
  selection: number;
  isSelected: boolean = false;

  displayedColumns: string[] = ['id', 'input', 'output', 'isPublic', 'select'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor() { }



  ngOnInit() {
  }

  public add() {
    if (this.dataSource == null) {
      this.dataSource = new MatTableDataSource<Testcase>();
    }
    if (this.data == null) {
      this.data = new Array<Testcase>();
    }
    this.data.push({
      id: this.dataSource.data.length + 1,
      input: this.input,
      output: this.output,
      isPublic: this.isPublic
    });
    this.reload();
  }

  public reload() {
    this.isSelected = false;
    this.dataSource = new MatTableDataSource<Testcase>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataChanged.emit(this.data);
  }

  public select(id) {
    this.isSelected = true;
    this.selection = id + this.paginator.pageIndex * this.paginator.pageSize;
    console.log(this.selection);
    this.input = this.dataSource.data[this.selection].input;
    this.output = this.dataSource.data[this.selection].output;
    this.isPublic = this.dataSource.data[this.selection].isPublic;
  }

  public update() {
    this.data[this.selection].input = this.input;
    this.data[this.selection].output = this.output;
    this.data[this.selection].isPublic = this.isPublic;
    this.reload();
  }

  public delete() {
    this.data.splice(this.selection, 1);
    this.reIndexing();
    this.reload();

  }

  public reIndexing() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].id = i + 1;
    }
  }

}
