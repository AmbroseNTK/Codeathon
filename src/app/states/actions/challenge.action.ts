import { Action } from '@ngrx/store';
import { ChallengeEntityModel } from '../models/challenge.entity.model';

export enum ChallengeActions {
  FETCH = "[Challenge] Fetch",
  FETCH_SUCCESS = "[Challenge] Fetch -> Success",
  FETCH_FAILED = "[Challenge] Fetch -> Failed",
  FETCH_OWN = "[Challenge] Fetch own",
  FETCH_OWN_SUCCESS = "[Challenge] Fetch own -> Success",
  FETCH_OWN_FAILED = "[Challenge] Fetch own -> Failed",
  PUT = "[Challenge] Put",
  PUT_SUCCESS = "[Challenge] Put -> Success",
  PUT_FAILED = "[Challenge] Put -> Failed",
  UPDATE = "[Challenge] Update",
  UPDATE_SUCCESS = "[Challenge] Update -> Success",
  UPDATE_FAILED = "[Challenge] Update -> Failed"
}

export class Fetch implements Action {
  public readonly type = ChallengeActions.FETCH;
}

export class FetchSuccess implements Action {
  public readonly type = ChallengeActions.FETCH_SUCCESS;
  constructor(public payload: { challenge: Array<ChallengeEntityModel> }) { }
}

export class FetchFailed implements Action {
  public readonly type = ChallengeActions.FETCH_FAILED;
}

export class FetchOwn implements Action {
  public readonly type = ChallengeActions.FETCH_OWN;
}

export class FetchOwnSuccess implements Action {
  public readonly type = ChallengeActions.FETCH_OWN_SUCCESS;
  constructor(public payload: { challenge: Array<ChallengeEntityModel> }) { }
}

export class FetchOwnFailed implements Action {
  public readonly type = ChallengeActions.FETCH_OWN_FAILED;
}

export class Put implements Action {
  public readonly type = ChallengeActions.PUT;
  constructor(public payload: { challenge: ChallengeEntityModel }) { }
}

export class PutSuccess implements Action {
  public readonly type = ChallengeActions.PUT_SUCCESS;
}

export class PutFailed implements Action {
  public readonly type = ChallengeActions.PUT_FAILED;
}

export class Update implements Action {
  public readonly type = ChallengeActions.UPDATE;
  constructor(public payload: { challengeID: string, data: {} }) { }
}

export class UpdateSuccess implements Action {
  public readonly type = ChallengeActions.UPDATE_SUCCESS;
}

export class UpdateFailed implements Action {
  public readonly type = ChallengeActions.UPDATE_FAILED;
}

export type All = Fetch
  | FetchSuccess
  | FetchFailed
  | FetchOwn
  | FetchOwnSuccess
  | FetchOwnFailed
  | Put
  | PutSuccess
  | PutFailed
  | Update
  | UpdateSuccess
  | UpdateFailed;
