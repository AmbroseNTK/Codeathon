import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ChallengeService } from '../../../services/challenge.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
    this.router.navigate(["explore"]);
  }

  email = "";
  username = "";
  password = "";
  retypedPassword = "";

  loginUsername = "";
  loginPassword = "";

  loginWithEmailAndPassword() {
    this.userService.loginWithEmailAndPassword(this.loginUsername, this.loginPassword)
      .then(() => this.router.navigate(["explore"]))
      .catch((mess) => this.snackbar.open(mess.toString(), "OK", { duration: 5000 }))
  }

  signUpWithEmailAndPassword() {
    this.userService.signUpWithEmailAndPassword(this.email, this.username, this.password, this.retypedPassword)
      .then((mess) => this.snackbar.open(mess.toString(), "OK", { duration: 5000 }))
      .catch((mess) => this.snackbar.open(mess.toString(), "OK", { duration: 5000 }))
  }

  forgotPassword() {
    this.userService.sendForgotPasswordEmail(this.loginUsername)
      .then(() => {
        this.snackbar.open("Check mail to recover your password", "OK", { duration: 5000 });
      })
      .catch((mess) => this.snackbar.open(mess.toString(), "OK", { duration: 5000 }));
  }

}
