import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../../../services/challenge.service';
import { ChallengeEntityModel } from '../../../states/models/challenge.entity.model';
import { ConfigService } from '../../../services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolutionDialogComponent } from '../solution-dialog/solution-dialog.component';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit {

  challengeID = '';
  challenge: ChallengeEntityModel;

  displayedColumns: string[] = ['email', 'name', 'runningTime', 'language', 'date', 'solution'];

  languages = ['Python', 'Ruby', 'Clojure', 'PHP', 'Javascript', 'Scala', 'Go', 'C/C++', 'Java', 'VB.NET', 'C#', 'Bash', 'Objective-C', 'MySQL', 'Perl', 'Rush'];

  languageID = 0;
  code = '';

  response;

  data: Array<{}>;
  dataSource: MatTableDataSource<{}> = new MatTableDataSource<{}>(this.data);

  isRunning = false;


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog, private afAuth: AngularFireAuth, private challengeService: ChallengeService, private configService: ConfigService, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(params => {
      this.challengeID = params['challengeID'];
      this.challengeService.challenges$.subscribe(value => {
        this.challenge = value.list[this.challengeID];
      });
    });
  }


  ngOnInit() {
    this.challengeService.challenges$.subscribe(value => {
      if (value.list.length != 0) {
        // @ts-ignore
        let data = value.list[this.challengeID]['history'];
        if (data != undefined) {
          let keys = Object.keys(data);
          this.data = new Array<{}>();
          for (let i = 0; i < keys.length; i++) {
            this.data.push({
              email: data[keys[i]].email,
              name: data[keys[i]].displayName,
              runningTime: data[keys[i]].execTime,
              date: data[keys[i]].date,
              language: this.languages[parseInt(data[keys[i]].languageID)],
              code: data[keys[i]].code
            });
          }
          this.dataSource = new MatTableDataSource<{}>(this.data);
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }

  replaceNewLine(str: string) {
    return str.replace(/\n/g, ' <br/> ');
  }

  run() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = {
      challengeID: this.challengeID,
      languageID: this.languageID,
      code: this.code,
      uid: this.afAuth.auth.currentUser.uid
    };
    console.log(body);
    this.isRunning = true;
    this.httpClient.post(this.configService.config.backend + '/submit', body, httpOptions).toPromise().then(value => {
      this.response = value;
      this.isRunning = false;
    }).catch(err => {
      this.isRunning = false;
      this.response = {
        type: "error",
        error: 'System is busy. Please try again'
      }
    });

  }

  canView() {
    return true;
  }

  hasLeaderboard() {
    if (this.data != undefined) {
      if (this.data.length != 0) {
        return true;
      }
    }
    return false;
  }

  showSolution(i) {
    let obj = this.data[i];
    const dialogRef = this.dialog.open(SolutionDialogComponent, {
      width: '90%',
      data: { language: obj['language'], code: obj['code'] }
    });
  }

}

