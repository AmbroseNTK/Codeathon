import * as CategoryActions from '../actions/category.action';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Category } from '../models/category.model';
import { CategoriesService } from '../../services/categories.service';

export type CategoryAction = CategoryActions.Action;

@Injectable()
export class CategoryEffects {
    constructor(private actions: Actions, private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

    @Effect()
    fetch: Observable<CategoryActions.Action> = this.actions.pipe(
        ofType(CategoryActions.CategoryActions.FETCH),
        mergeMap(() => from(this.db.object("categories/").snapshotChanges())),
        map((snapshot) => {
            let categories = Array<Category>();

            let rawCategories = snapshot.payload.val();
            let categoryKeys = Object.keys(rawCategories);
            console.log(rawCategories);
            for (let j = 0; j < categoryKeys.length; j++) {
                let data = rawCategories[categoryKeys[j]];
                let cat = {
                    id: categoryKeys[j],
                    name: data["name"],
                    description: data["description"],
                    imageUrl: data["imageUrl"],
                    uid: data["uid"],
                    challengeList: data["challengeList"]
                };
                categories.push(cat);

            }
            return new CategoryActions.FetchSuccess({ categories: { items: categories, ownItems: [] } });
        }),
        catchError((err) => {
            console.log(err);
            return of(new CategoryActions.FetchFailed())
        })

    )

}