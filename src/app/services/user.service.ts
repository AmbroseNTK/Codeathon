import { Injectable } from '@angular/core';
import IAppState from '../states/models/IAppState';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import User from '../states/models/user.model';
import {Login} from '../states/actions/user.action';
import {ChallengeService} from './challenge.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$:Observable<User>;
  public user:User;
  constructor(private store:Store<IAppState>, private challengeService:ChallengeService) {
    this.user$ = store.select('user');
    this.user$.subscribe(value => {
      this.user = value;
      this.challengeService.fetch();
    });
  }
  public login(){
    this.store.dispatch(new Login());
  }
}
