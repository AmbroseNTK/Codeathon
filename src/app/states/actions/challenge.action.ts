import {Action} from '@ngrx/store';
import {ChallengeEntityModel} from '../models/challenge.entity.model';

export enum ChallengeActions{
  FETCH = "[Challenge] Fetch",
  FETCH_SUCCESS = "[Challenge] Fetch -> Success",
  FETCH_FAILED = "[Challenge] Fetch -> Failed",
  PUT = "[Challenge] Put",
  PUT_SUCCESS = "[Challenge] Put -> Success",
  PUT_FAILED = "[Challenge] Put -> Failed"
}

export class Fetch implements Action{
  public readonly type = ChallengeActions.FETCH;
}

export class FetchSuccess implements Action{
  public readonly type = ChallengeActions.FETCH_SUCCESS;
  constructor(public payload:{challenge:Array<ChallengeEntityModel>}){}
}

export class FetchFailed implements  Action{
  public readonly type = ChallengeActions.FETCH_FAILED;
}

export class Put implements Action{
  public readonly type = ChallengeActions.PUT;
  constructor(public payload:{challenge:ChallengeEntityModel}){}
}

export class PutSuccess implements Action{
  public readonly type = ChallengeActions.PUT_SUCCESS;
}

export class PutFailed implements  Action{
  public readonly type = ChallengeActions.PUT_FAILED;
}



export type All = Fetch
| FetchSuccess
| FetchFailed
| Put
| PutSuccess
| PutFailed;
