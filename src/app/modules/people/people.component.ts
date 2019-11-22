import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import IAppState from '../../states/models/IAppState';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public userList = null;
  public dataSource = null;
  displayedColumns = [
    "photoURL",
    "email",
    "displayName",
    "selected"
  ]

  constructor(public store: Store<IAppState>) { }

  ngOnInit() {
    (this.store.select("people")).subscribe((data) => {

      this.dataSource = new MatTableDataSource(data.map((entry) => ({ ...(<any>entry), selected: "" })));
      this.userList = data;
      console.log(this.userList);
    });
  }

  clickView(email) {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
