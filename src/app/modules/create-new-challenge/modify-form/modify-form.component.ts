import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../../services/challenge.service';
import { Challenge } from '../../../states/models/challenge.model';
import { Testcase } from '../../../states/models/testcase.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.scss']
})
export class ModifyFormComponent implements OnInit {

  selectedChallenge = <Challenge>{
    list: {}
  }
  testCases: Array<Testcase> = new Array<Testcase>();

  retypedID = "";

  canViewSolution = false;

  constructor(public challengeService: ChallengeService, public snackBar: MatSnackBar, public matDialog: MatDialog) {
    challengeService.fetchOwn();
  }

  ngOnInit() {
    this.challengeService.onUpdateResult = (result) => {
      this.snackBar.open(result, null, {
        duration: 1000
      });
    }
  }

  public select(data) {
    this.selectedChallenge = data;
    console.log(data['testCases']);
    this.testCases = data['testCases']
    //console.log(data);
  }
  setTestCases(data) {
    console.log(data);
    this.testCases = <Array<Testcase>>data;
  }

  save() {
    console.log(this.selectedChallenge);
    this.challengeService.update(this.selectedChallenge['challengeID'], this.selectedChallenge);
  }

  delete() {
    //this.challengeService.delete(this.selectedChallenge['challengeID']);
    this.matDialog.open(DeleteConfirmationComponent, {
      data: { id: this.selectedChallenge['challengeID'] }
    })
  }

}
