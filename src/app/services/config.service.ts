import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Config} from '../states/models/config.model';
import {Store} from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import {Fetch} from '../states/actions/config.action';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config$:Observable<Config>;
  public config:Config;
  constructor(store:Store<IAppState>) {
    this.config$ = store.select('config');
    store.dispatch(new Fetch());
    this.config$.subscribe(value => this.config = value);
  }
}
