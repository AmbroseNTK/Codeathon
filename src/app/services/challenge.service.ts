import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import { Challenge } from '../states/models/challenge.model';
import { Observable } from 'rxjs';
import { Fetch, Put, FetchOwn, Update } from '../states/actions/challenge.action';
import { ChallengeEntityModel } from '../states/models/challenge.entity.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  public challenges$: Observable<Challenge>;
  public challenges: Array<Challenge>;

  constructor(private store: Store<IAppState>, private db: AngularFireDatabase) {
    this.challenges$ = store.select('challenges');
    this.challenges$.subscribe(value => {

      this.challenges = new Array<Challenge>();
      let keys = Object.keys(value.list);
      for (let i = 0; i < keys.length; i++) {
        this.challenges.push(value.list[keys[i]]);
      }
    });
  }

  public fetch() {
    this.store.dispatch(new Fetch());
  }
  public put(challenge: ChallengeEntityModel) {
    this.store.dispatch(new Put({ challenge: challenge }));
  }

  public fetchOwn() {
    this.store.dispatch(new FetchOwn());
  }

  public update(id: string, data: {}) {
    this.store.dispatch(new Update({ challengeID: id, data: data }));
  }

  public delete(id: string) {
    this.db.object("challenges/" + id).remove().then(() => {
      this.onUpdateResult(id + " was deleted");
    }).catch((err) => {
      this.onUpdateResult("Cannot delete " + id);
    })
  }

  public onPutResult: (status: string) => void;

  public onUpdateResult: (status: string) => void;

}
