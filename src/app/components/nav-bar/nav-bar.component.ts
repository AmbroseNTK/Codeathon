import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public userService: UserService, public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
  }

}
