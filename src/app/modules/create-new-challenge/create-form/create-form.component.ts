import { Component, OnInit } from '@angular/core';
import {Testcase} from '../../../states/models/testcase.model';
import {UserService} from '../../../services/user.service';
import {ChallengeService} from '../../../services/challenge.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ChallengeEntityModel} from '../../../states/models/challenge.entity.model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  testCases:Array<Testcase> = new Array<Testcase>();
  challengeID ="";
  title = "";
  shortDescription="";
  details = "";
  sampleInput = "";
  sampleOutput = "";

  constructor(private userService:UserService, private challengeService:ChallengeService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.challengeService.onPutResult = (result) => {
      this.snackBar.open(result,null,{
        duration:1000
      });
    }
  }

  setTestCases(data){
    this.testCases = <Array<Testcase>>data;
  }

  create(){
    console.log(this.challengeService.challenges.list);
    if(Object.keys(this.challengeService.challenges.list).findIndex(value => value == this.challengeID) == -1 && this.challengeID!='') {
      this.challengeService.put(<ChallengeEntityModel>{
        challengeID: this.challengeID,
        ownerID: this.userService.user.uid,
        title: this.title,
        shortDescription: this.shortDescription,
        details: this.details,
        sampleInput: this.sampleInput,
        sampleOutput: this.sampleOutput,
        testCases: this.testCases
      });
    }
    else{
      this.snackBar.open(this.challengeID+" has existed",null,{
        duration:1000
      });
    }
  }

}
