import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import IAppState from 'src/app/states/models/IAppState';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public userList = null;
  public dataSource = null;
  displayedColumns = [
    "photoURL",
    "email",
    "displayName",
    "selected"
  ]

  @ViewChild(MatPaginator, { static: false }) paginators: MatPaginator;

  constructor(public store: Store<IAppState>, public router: Router) { }

  ngOnInit() {
    (this.store.select("people")).subscribe((data) => {

      this.dataSource = new MatTableDataSource(data.map((entry) => ({ ...(<any>entry), selected: "" })));
      this.userList = data;

      setTimeout(() => {
        this.dataSource.paginator = this.paginators;
      }, 100);

    });
  }

  clickView(email) {
    this.router.navigate(["people/profile/" + email]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
