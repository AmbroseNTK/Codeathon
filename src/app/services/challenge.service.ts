import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import {Challenge} from '../states/models/challenge.model';
import {Observable} from 'rxjs';
import {Fetch, Put} from '../states/actions/challenge.action';
import {ChallengeEntityModel} from '../states/models/challenge.entity.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  public challenges$:Observable<Challenge>;
  public challenges:Challenge;

  constructor(private store:Store<IAppState>) {
    this.challenges$ = store.select('challenges');
    this.challenges$.subscribe(value => this.challenges = value);
  }

  public fetch(){
    this.store.dispatch(new Fetch());
  }
  public put(challenge:ChallengeEntityModel){
    this.store.dispatch(new Put({challenge:challenge}));
  }

  public onPutResult:(status:string)=>void;
}
