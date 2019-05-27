import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {All, ConfigActions, FetchFailed, FetchSuccess} from '../actions/config.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {Config} from '../models/config.model';

export type ConfigAction = All

@Injectable()
export class ConfigEffect{
  constructor(private actions:Actions, private db:AngularFireDatabase){}

  @Effect()
  fetch:Observable<ConfigAction> = this.actions.pipe(
    ofType(ConfigActions.FETCH),
    switchMap(()=>this.db.object("config").snapshotChanges()),
    map((snapshot)=>new FetchSuccess({config:<Config>snapshot.payload.val()})),
    catchError((err)=>of(new FetchFailed()))
  );

}
