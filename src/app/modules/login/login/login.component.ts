import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ChallengeService} from '../../../services/challenge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
  }

}
