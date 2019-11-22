import { createReducer, on, State } from '@ngrx/store';
import { fetch, fetchSuccess } from '../actions/people.action';


export const initialState = [];


export const peopleReducer = createReducer(initialState,
    on(fetch, state => state),
    on(fetchSuccess, ((state, payload) => ([...payload.people])))
);

export function reducer(state: [] | undefined, action) {
    return peopleReducer(state, action);
}