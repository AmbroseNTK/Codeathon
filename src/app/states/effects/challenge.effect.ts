import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {from, Observable, of} from 'rxjs';
import * as ChallengeUser from '../actions/challenge.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {FetchFailed, FetchSuccess, Put, PutFailed, PutSuccess} from '../actions/challenge.action';
import {ChallengeEntityModel} from '../models/challenge.entity.model';
import {ChallengeService} from '../../services/challenge.service';

export type Action = ChallengeUser.All;

@Injectable()
export class ChallengeEffect{
  constructor(private actions:Actions, private db:AngularFireDatabase, private challengeService:ChallengeService){}

  @Effect()
  fetch:Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.FETCH),
    mergeMap(()=>this.db.object("challenges/").snapshotChanges()),
    map((snapshot)=>{
      let data = snapshot.payload.val();
      if(data != null){

        return new FetchSuccess({challenge:<Array<ChallengeEntityModel>>data});
      }
      else{

        return new FetchFailed();
      }
    })
  );

  @Effect()
  fetchFailed:Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.FETCH_FAILED),
    mergeMap(()=> from(this.db.object("challenges/").set({}))),
    map(()=>{
      return new FetchSuccess({challenge:new Array<ChallengeEntityModel>()});
    })
  );

  @Effect()
  put:Observable<Action> = this.actions.pipe(
    ofType(ChallengeUser.ChallengeActions.PUT),
    map((action:Put)=>action.payload.challenge),
    switchMap((payload)=>from(this.db.object("challenges/"+payload.challengeID).set(payload)).pipe(
      map(()=>{
        this.challengeService.onPutResult("This challenge is created");
        return new PutSuccess();
      }),
      catchError(()=>{
        this.challengeService.onPutResult("Cannot create this challenge");
        return of(new PutFailed());
      })
    ))
  )

}
