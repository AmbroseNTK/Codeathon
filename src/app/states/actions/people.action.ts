import { createAction, props } from '@ngrx/store';

export const FETCH = "[People API] Fetch data";
export const FETCH_SUCCESS = "[People API] Fetch data -> success";

export const fetch = createAction(FETCH);
export const fetchSuccess = createAction(FETCH_SUCCESS,
    props<{ people: any }>());