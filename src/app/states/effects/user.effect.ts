import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {from, Observable, of, pipe} from 'rxjs';
import {FetchProfile, FetchProfileFailed, FetchProfileSuccess, LoginFailed, LoginSuccess, UserActions} from '../actions/user.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import * as UserAction from '../actions/user.action';
import {AngularFireDatabase} from '@angular/fire/database';

export type Action = UserAction.All;

@Injectable()
export class UserEffect {
  constructor(private actions: Actions, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
  }

  @Effect()
  login: Observable<Action> = this.actions.pipe(
    ofType(UserActions.LOGIN),
    mergeMap(() => {
      const provider = new auth.GoogleAuthProvider();
      return from(this.afAuth.auth.signInWithPopup(provider)).pipe();
    }),
    map((credential) => {
      return new LoginSuccess({uid: this.afAuth.auth.currentUser.uid, data: this.afAuth.auth.currentUser});
    }),
    catchError(err => of(new LoginFailed({err: err})))
  );

  @Effect()
  loginSuccess: Observable<Action> = this.actions.pipe(
    ofType(UserActions.LOGIN_SUCCESS),
    map((action: LoginSuccess) => action.payload),
    mergeMap((payload) => of(new FetchProfile({uid: payload.uid}))));


  @Effect()
  fetchProfile: Observable<Action> = this.actions.pipe(
    ofType(UserActions.FETCH_PROFILE),
    map((action: FetchProfile) => action.payload),
    mergeMap((payload) => this.db.object('users/' + payload.uid + '/').snapshotChanges()),
    map((snapshot) => {
      let data = snapshot.payload.val();
      console.log(data);
      //Is empty
      if (data == null || Object.keys(data).length == 0) {
        return new FetchProfileFailed({uid: this.afAuth.auth.currentUser.uid});
      }
      return new FetchProfileSuccess({profile: data});
    })
  );

  @Effect()
  fetchFailed: Observable<Action> = this.actions.pipe(
    ofType(UserActions.FETCH_PROFILE_FAILED),
    map((action: FetchProfileFailed) => action.payload),
    mergeMap((payload) =>
      from(this.db.object('users/' + payload.uid + '/').set({
          challenges: {
            dummy: 0
          },
          history: {
            dummy: 0
          }
        })
      )),
    map(() => {
      return new LoginSuccess({uid: this.afAuth.auth.currentUser.uid, data: {}});
    })
  );

}
