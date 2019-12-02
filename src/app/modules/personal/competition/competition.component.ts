import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../../services/competition.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ChallengeService } from '../../../services/challenge.service';
import { Store } from '@ngrx/store';
import IAppState from '../../../states/models/IAppState';
import { FetchOwn } from '../../../states/actions/challenge.action';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(
    public competition: CompetitionService,
    public auth: AngularFireAuth,
    public challenge: ChallengeService,
    public store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new FetchOwn())
    this.store.select("challenges").subscribe((data) => {
      this.ownChallenges = Object.keys(data.list);
    });
    this.updateTable();
  }

  id = "";
  name = "";
  shortDescription = "";
  description = "";
  expiredDate = "";
  duration = -1;
  converImage = undefined;
  medalIcon = undefined;
  point = 0;
  prerequisite = "";

  ownChallenges = [];
  challengeList = [];

  hasExp = false;
  hasDuration = false;
  hasPrerequisite = false;
  enableUpdate = false;
  challengeIndex = 0;

  _challenge = undefined;
  challengeDataSource: MatTableDataSource<any>;

  displayedColumns = ["id", "point", "prerequisite", "update", "delete"];

  public changeExp(event) {
    this.hasExp = event.checked;
  }

  public changeDuration(event) {
    this.hasDuration = event.checked;
  }

  public changePrerequisite(event) {
    this.hasPrerequisite = event.checked;
    if (!event.checked) {
      this.prerequisite = "";
    }
  }

  onClickSaveDraft() {
    this.competition.create({
      id: this.id,
      ownerId: this.auth.auth.currentUser.uid,
      name: this.name,
      shortDescription: this.shortDescription,
      description: this.description,
      challenges: JSON.stringify(this.competition.arrayToJson(this.challengeList)),
      expiredDate: this.expiredDate,
      duration: this.duration
    }, this.converImage, this.medalIcon);
  }

  onClickAddChallenge() {
    this.challengeList.push({
      id: this._challenge,
      point: this.point,
      prerequisite: this.prerequisite
    });
    this.updateTable();
    this._challenge = "";
    this.point = 0;
    this.prerequisite = "";
  }

  updateChallenge() {
    this.challengeList[this.challengeIndex] = {
      id: this._challenge,
      point: this.point,
      prerequisite: this.prerequisite
    }
    this.updateTable();
  }

  onClickUpdateChallenge(element, i) {
    this.enableUpdate = true;
    this._challenge = element.id;
    this.point = element.point;
    this.prerequisite = element.prerequisite;
    this.challengeIndex = i;
  }

  onClickDeleteChallenge(element) {
    this.challengeList.splice(this.challengeList.indexOf(element), 1);
    this.updateTable();
  }

  updateTable() {
    this.challengeDataSource = new MatTableDataSource(this.challengeList);
  }
}
