import { createEffect, Actions, ofType } from '@ngrx/effects';
import { FETCH, FETCH_SUCCESS, fetch, fetchSuccess } from '../actions/people.action';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config.service';

@Injectable()
export class PeopleEffects {

    constructor(public actions$: Actions, public config: ConfigService, public client: HttpClient) { }

    fetchPeople$ = createEffect(() => this.actions$.pipe(
        ofType(FETCH),
        mergeMap(() => this.client.get(this.config.config.backend + "/people/list")
            .pipe(
                map((data) => fetchSuccess({ people: data })),
                catchError(() => EMPTY)
            ))
    ));

}