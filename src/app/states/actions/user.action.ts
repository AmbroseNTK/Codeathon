import {Action} from '@ngrx/store';

export enum UserActions {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login -> Success',
  LOGIN_FAILED = '[User] Login -> Failed',
  FETCH_PROFILE = '[User] Fetch profile',
  FETCH_PROFILE_SUCCESS = '[User] Fetch profile -> Success',
  FETCH_PROFILE_FAILED = '[User] Fetch profile -> Failed',
}

export class Login implements Action {
  public readonly type = UserActions.LOGIN;

  constructor() {
  }
}

export class LoginSuccess implements Action {
  public readonly type = UserActions.LOGIN_SUCCESS;

  constructor(public payload: { uid: string, data: {} }) {
  }
}

export class LoginFailed implements Action {
  public readonly type = UserActions.LOGIN_FAILED;

  constructor(public payload: { err: {} }) {
  }
}

export class FetchProfile implements Action {
  public readonly type = UserActions.FETCH_PROFILE;

  constructor(public payload: { uid: string }) {
  }
}

export class FetchProfileSuccess implements Action {
  public readonly type = UserActions.FETCH_PROFILE_SUCCESS;

  constructor(public payload: { profile: {} }) {
  }
}

export class FetchProfileFailed implements Action {
  public readonly type = UserActions.FETCH_PROFILE_FAILED;

  constructor(public payload: { uid: string }) {
  }
}

export type All = Login
  | LoginSuccess
  | LoginFailed
  | FetchProfile
  | FetchProfileSuccess
  | FetchProfileFailed;
