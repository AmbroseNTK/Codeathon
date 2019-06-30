import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChallengeEntityModel } from '../../../states/models/challenge.entity.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChallengeService } from '../../../services/challenge.service';
import { Store } from '@ngrx/store';
import IAppState from '../../../states/models/IAppState';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'shared-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  @Output()
  selectChallenge: EventEmitter<ChallengeEntityModel> = new EventEmitter();

  data: Array<ChallengeEntityModel>;
  dataSource: MatTableDataSource<ChallengeEntityModel> = new MatTableDataSource<ChallengeEntityModel>(this.data);

  displayedColumns: string[] = ['challengeID', 'title', 'shortDescription', 'select'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
    this.store.select('challenges').subscribe((state) => {
      let keys = Object.keys(state.list);
      this.data = new Array<ChallengeEntityModel>();
      for (let i = 0; i < keys.length; i++) {
        this.data.push(state.list[keys[i]]);
      }
      console.log(this.data);
      this.dataSource = new MatTableDataSource<ChallengeEntityModel>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  public select(challengeID) {
    let selectedChallenge: ChallengeEntityModel = this.data.filter((challenge) => challenge.challengeID == challengeID)[0]
    this.selectChallenge.emit(selectedChallenge);
    this.router.navigate(['/solving/' + challengeID]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
