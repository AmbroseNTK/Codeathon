import {Action} from '@ngrx/store';
import {Config} from '../models/config.model';

export enum ConfigActions{
  FETCH = "[Config] Fetch",
  FETCH_SUCCESS = "[Config] Fetch -> Success",
  FETCH_FAILED = "[Config] Fetch -> Failed"
}

export class Fetch implements Action{
  readonly type = ConfigActions.FETCH;
}

export class FetchSuccess implements Action{
  readonly type = ConfigActions.FETCH_SUCCESS;
  constructor(public payload:{config:Config}){}
}

export class FetchFailed implements Action{
  readonly type = ConfigActions.FETCH_FAILED;
}

export type All = Fetch
| FetchSuccess
| FetchFailed;
