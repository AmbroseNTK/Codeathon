import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import { fetch } from '../states/actions/people.action';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public store: Store<IAppState>) {

  }

  public fetchList() {
    this.store.dispatch(fetch());
  }

}
