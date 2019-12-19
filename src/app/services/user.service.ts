import { Injectable } from '@angular/core';
import IAppState from '../states/models/IAppState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import User from '../states/models/user.model';
import { Login } from '../states/actions/user.action';
import { ChallengeService } from './challenge.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CategoriesService } from './categories.service';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$: Observable<User>;
  public user: User;
  constructor(private store: Store<IAppState>,
    private afAuth: AngularFireAuth,
    private challengeService: ChallengeService,
    private categoriesService: CategoriesService) {
    this.user$ = store.select('user');
    this.user$.subscribe(value => {
      this.user = value;
      this.challengeService.fetch();
      this.categoriesService.getOwn(value.uid);
      console.log(this.categoriesService.categories);
    });
  }
  public login() {
    this.store.dispatch(new Login());
  }

  public signUpWithEmailAndPassword(email, username, password, retypedPassword) {

    return new Promise<string>((resolve, reject) => {

      if (email == "") {
        reject("Please enter email");
      }

      if (password == "") {
        reject("Please enter password");
      }
      if (password != retypedPassword) {
        reject("Password and retype password are not match");
      }

      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => resolve("Create user successfully"))
        .catch((err) => reject(err));
    });

  }

  public loginWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => resolve("Login successfully"))
        .catch((err) => reject(err));
    })
  }

  public sendForgotPasswordEmail(email) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => resolve("Sent"))
        .catch((err) => reject(err));
    });
  }

}
