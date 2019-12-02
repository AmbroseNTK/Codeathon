import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../../services/competition.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ChallengeService } from '../../../services/challenge.service';
import { Store } from '@ngrx/store';
import IAppState from '../../../states/models/IAppState';
import { FetchOwn } from '../../../states/actions/challenge.action';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(
    public competition: CompetitionService,
    public auth: AngularFireAuth,
    public challenge: ChallengeService,
    public snackbar: MatSnackBar,
    public store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new FetchOwn())
    this.store.select("challenges").subscribe((data) => {
      this.ownChallenges = Object.keys(data.list);
    });
    this.updateTable();
    this.auth.user.subscribe((usr) => {
      this.competition.get(usr.uid).then((data) => {
        console.log(data);
        let result = <[any]>data["data"];
        for (let i = 0; i < result.length; i++) {
          if (result[i].publish == undefined || result[i].publish == false) {
            result[i] = { ...result[i], publish: true };
          }
          result[i] = { ...result[i], monitor: true, modify: true, delete: true };
        }
        this.avalCompetition = result;
      })
    })
  }

  id = "";
  name = "";
  shortDescription = "";
  description = "";
  expiredDate = "";
  duration = -1;
  coverImage = undefined;
  medalIcon = undefined;
  point = 0;
  prerequisite = "";
  showEditForm = false;
  competitionEditMode = false;

  ownChallenges = [];
  challengeList = [];
  avalCompetition = [];

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

  async onClickSaveDraft() {
    console.log(this.expiredDate);
    let result = await this.competition.create({
      id: this.id,
      ownerId: this.auth.auth.currentUser.uid,
      name: this.name,
      shortDescription: this.shortDescription,
      description: this.description,
      challenges: JSON.stringify(this.competition.arrayToJson(this.challengeList)),
      expiredDate: this.expiredDate,
      duration: this.duration
    }, this.coverImage, this.medalIcon);
    if (result["status"] == "success") {
      this.snackbar.open("Create new competition successfully", "OK", { duration: 2000 });
      window.location.reload();
    }
    else {
      this.snackbar.open("Error: " + result["message"], "OK", { duration: 2000 });
    }

  }

  async onClickUpdateCompetition() {
    let result = await this.competition.update({
      id: this.id,
      ownerId: this.auth.auth.currentUser.uid,
      name: this.name,
      shortDescription: this.shortDescription,
      description: this.description,
      challenges: JSON.stringify(this.competition.arrayToJson(this.challengeList)),
      expiredDate: this.expiredDate,
      duration: this.duration,
      isPublished: false
    }, this.coverImage, this.medalIcon);
    if (result["status"] == "success") {
      this.snackbar.open("Update competition successfully", "OK", { duration: 2000 });
      window.location.reload();
    }
    else {
      this.snackbar.open("Error: " + result["message"], "OK", { duration: 2000 });
    }

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

  onClickAddNewCompetition() {
    this.showEditForm = true;
    this.competitionEditMode = false;
    this.id = "";
    this.name = "";
    this.shortDescription = "";
    this.description = "";
    this.expiredDate = "";
    this.duration = -1;
    this.challengeList = [];
    this._challenge = "";
    this.point = 0;
    this.prerequisite = "";
    this.hasPrerequisite = false;
    this.enableUpdate = false;
    this.challengeDataSource = new MatTableDataSource(this.challengeList);
  }

  onCompetitionTableAction(action) {
    console.log(action);
    if (action.action.name == "modify") {
      this.showEditForm = true;
      this.competitionEditMode = true;
      console.log(action.element);
      this.id = action.element.id;
      this.name = action.element.name;
      this.shortDescription = action.element.shortDescription;
      this.description = action.element.description;
      this.expiredDate = action.element.expiredDate;
      this.duration = action.element.duration;
      this.challengeList = action.element.challenges == undefined ? [] : action.element.challenges;
      this.challengeDataSource = new MatTableDataSource(this.challengeList);
      this._challenge = "";
      this.point = 0;
      this.prerequisite = "";
      this.hasPrerequisite = false;
      this.enableUpdate = false;

    }
    else if (action.action.name == "delete") {
      this.competition.delete(action.element.id, this.auth.auth.currentUser.uid).then(res => {
        if (res['status'] == "success") {
          this.snackbar.open("Delete successfully", "OK", { duration: 2000 });
          window.location.reload();
        }
        else {
          this.snackbar.open("Error: " + res['message'], "OK", { duration: 2000 });
        }
      })
    }
  }


}
