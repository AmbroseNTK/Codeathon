import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import IAppState from '../states/models/IAppState';
import { Observable } from 'rxjs';
import { Categories } from '../states/models/categories.model';
import * as CategoryAction from '../states/actions/category.action';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories$: Observable<Categories>;
  categories: Categories;

  constructor(private store: Store<IAppState>) {
    this.categories$ = store.select("categories");
    store.dispatch(new CategoryAction.Fetch());
    this.categories$.subscribe((value) => this.categories = value);
  }

  getOwn(uid) {
    this.categories.ownItems = this.categories.items.filter((value) => value["uid"] == uid);
  }


}
