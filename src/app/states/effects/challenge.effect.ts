import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import * as ChallengeUser from '../actions/challenge.action';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { FetchFailed, FetchOwnSuccess, FetchOwnFailed, FetchSuccess, Put, PutFailed, PutSuccess, Update, UpdateSuccess, UpdateFailed } from '../actions/challenge.action';
import { ChallengeEntityModel } from '../models/challenge.entity.model';
import { ChallengeService } from '../../services/challenge.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Challenge } from '../models/challenge.model';

export type Action = ChallengeUser.All;

@Injectable()
export class ChallengeEffect {
  constructor(private actions: Actions, private afAuth: AngularFireAuth, private db: AngularFireDatabase, private challengeService: ChallengeService) { }

  @Effect()
  fetch: Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.FETCH),
    mergeMap(() => this.db.object("challenges/").snapshotChanges()),
    map((snapshot) => {
      let data = snapshot.payload.val();
      if (data != null) {
        return new FetchSuccess({ challenge: <Array<ChallengeEntityModel>>data });
      }
      else {
        return new FetchFailed();
      }
    })
  );

  @Effect()
  fetchFailed: Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.FETCH_FAILED),
    mergeMap(() => from(this.db.object("challenges/").set({}))),
    map(() => {
      return new FetchSuccess({ challenge: new Array<ChallengeEntityModel>() });
    })
  );

  @Effect()
  fetchOwn: Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.FETCH_OWN),
    mergeMap(() => this.db.object("challenges/").snapshotChanges()),
    map((snapshot) => {
      if (this.afAuth.auth.currentUser == null) {
        return new FetchOwnFailed();
      }
      let data = snapshot.payload.val();
      if (data != null) {
        let selected = {}
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
          if (data[keys[i]]['ownerID'] == this.afAuth.auth.currentUser.uid) {
            selected[keys[i]] = data[keys[i]]
          }
        }
        return new FetchOwnSuccess({ challenge: <Array<ChallengeEntityModel>>selected });
      }
      else {
        return new FetchOwnFailed();
      }
    })
  )

  @Effect()
  put: Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.PUT),
    map((action: Put) => action.payload.challenge),
    switchMap((payload) => from(this.db.object("challenges/" + payload.challengeID).set(payload)).pipe(
      map(() => {
        this.challengeService.onPutResult("This challenge is created");
        return new PutSuccess();
      }),
      catchError(() => {
        this.challengeService.onPutResult("Cannot create this challenge");
        return of(new PutFailed());
      })
    ))
  )

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.UPDATE),
    map((action: Update) => action.payload),
    switchMap((payload) => from(this.db.object("challenges/" + payload.challengeID).update(payload.data)).pipe(
      map(() => {
        this.challengeService.onUpdateResult(payload.challengeID + " was updated");
        return new UpdateSuccess();
      }),
      catchError(() => {
        this.challengeService.onUpdateResult("Cannot update challenge " + payload.challengeID);
        return of(new UpdateFailed());
      })
    ))
  )

}
