import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../states/models/config.model';
import { Store } from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import { Fetch } from '../states/actions/config.action';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config$: Observable<Config>;
  public config: Config;
  constructor(public store: Store<IAppState>, public peopleService: PeopleService) {
  }

  fetch() {
    this.config$ = this.store.select('config');
    this.store.dispatch(new Fetch());
    this.config$.subscribe(value => {
      this.config = value;
      this.peopleService.fetchList();
    });
  }
}
