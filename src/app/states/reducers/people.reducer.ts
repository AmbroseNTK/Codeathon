import { createReducer, on } from '@ngrx/store';
import { fetch, fetchSuccess } from '../actions/people.action';

export const initialState = {
    people: {}
};

export const peopleReducer = createReducer(initialState,
    on(fetch, state => state),
    on(fetchSuccess, ((state, payload) => ({ people: payload.people })))
);