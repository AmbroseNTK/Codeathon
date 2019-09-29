import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';
import { Categories } from '../models/categories.model';

export enum CategoryActions {
    FETCH = "[Category] Fetch",
    FETCH_SUCCESS = "[Category] Fetch -> Success",
    FETCH_FAILED = "[Category] Fetch -> Failed",

    FETCH_OWN = "[Category] Fetch own",
    FETCH_OWN_SUCCESS = "[Category] Fetch own -> Success",
    FETCH_OWN_FAILED = "[Category] Fetch own -> Failed",

    CREATE = "[Category] Create",
    CREATE_SUCCESS = "[Category] Create -> Success",
    CREATE_FAILED = "[Category] Create -> Failed",

    UPDATE = "[Category] Update",
    UPDATE_SUCCESS = "[Category] Update -> Success",
    UPDATE_FAILED = "[Category] Update -> Failed"
}

export class Fetch implements Action {
    public readonly type = CategoryActions.FETCH;

}

export class FetchSuccess implements Action {
    public readonly type = CategoryActions.FETCH_SUCCESS;
    constructor(public payload: { categories: Categories }) { }
}

export class FetchFailed implements Action {
    public readonly type = CategoryActions.FETCH_FAILED;
}

export class FetchOwn implements Action {
    public readonly type = CategoryActions.FETCH_OWN;

}

export class FetchOwnSuccess implements Action {
    public readonly type = CategoryActions.FETCH_OWN_SUCCESS;
    constructor(public payload: { categories: Categories }) { }
}

export class FetchOwnFailed implements Action {
    public readonly type = CategoryActions.FETCH_OWN_FAILED;
}

export class Create implements Action {
    public readonly type = CategoryActions.CREATE;
    constructor(public payload: { category: Category }) { }
}

export class CreateSuccess implements Action {
    public readonly type = CategoryActions.CREATE_SUCCESS;

}

export class CreateFailed implements Action {
    public readonly type = CategoryActions.CREATE_FAILED;
}

export class Update implements Action {
    public readonly type = CategoryActions.UPDATE;
    constructor(public payload: { category: Category }) { }
}

export class UpdateSuccess implements Action {
    public readonly type = CategoryActions.UPDATE_SUCCESS;
}

export class UpdateFailed implements Action {
    public readonly type = CategoryActions.UPDATE_FAILED;
}

export type Action = Fetch
    | FetchSuccess
    | FetchFailed
    | FetchOwn
    | FetchOwnSuccess
    | FetchOwnFailed
    | Create
    | CreateSuccess
    | CreateFailed
    | Update
    | UpdateSuccess
    | UpdateFailed;