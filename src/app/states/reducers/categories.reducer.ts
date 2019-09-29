import { Categories } from '../models/categories.model';
import { Action, CategoryActions } from '../actions/category.action';

const defaultCategories: Categories = {
    items: [],
    ownItems: []
}

export function categoriesReducer(state: Categories = defaultCategories, action: Action) {
    switch (action.type) {
        case CategoryActions.FETCH_SUCCESS:
            return { ...state, items: action.payload.categories.items };
        case CategoryActions.FETCH_OWN_SUCCESS:
            return { ...state, items: action.payload.categories.items };
        default:
            return state;
    }
}