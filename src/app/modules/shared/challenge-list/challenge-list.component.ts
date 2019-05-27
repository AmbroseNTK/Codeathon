import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ChallengeEntityModel} from '../../../states/models/challenge.entity.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ChallengeService} from '../../../services/challenge.service';
import {Store} from '@ngrx/store';
import IAppState from '../../../states/models/IAppState';
import {Router} from '@angular/router';

@Component({
  selector: 'shared-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  @Output()
  selectChallenge:EventEmitter<ChallengeEntityModel> = new EventEmitter();

  data:Array<ChallengeEntityModel>;
  dataSource:MatTableDataSource<ChallengeEntityModel> = new MatTableDataSource<ChallengeEntityModel>(this.data);

  displayedColumns: string[] = ['challengeID', 'title', 'shortDescription', 'select'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store:Store<IAppState>, private router:Router) { }

  ngOnInit() {
    this.store.select('challenges').subscribe((state)=>{
      let keys = Object.keys(state.list);
      this.data = new Array<ChallengeEntityModel>();
      for(let i = 0; i<keys.length;i++){
        this.data.push(state.list[keys[i]]);
      }
      console.log(this.data);
      this.dataSource = new MatTableDataSource<ChallengeEntityModel>(this.data);

    });

  }

  public select(i){
    this.selectChallenge.emit(this.data[i]);
    this.router.navigate(['/solving/'+this.data[i].challengeID]);
  }

}
