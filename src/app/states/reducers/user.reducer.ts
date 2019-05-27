import User from '../models/user.model';
import {All, UserActions} from '../actions/user.action';

const defaultUser: User = {
  uid: '',
  data: {},
  loginError: {},
  profile:{}
};

export function userReducer(state: User = defaultUser, action: All) {
  switch (action.type) {
    case UserActions.LOGIN:
      return {...state};
    case UserActions.LOGIN_SUCCESS:
      return {...state, uid: action.payload.uid, data: action.payload.data};
    case UserActions.LOGIN_FAILED:
      return {uid: '', data: {}, loginError: action.payload.err};
    case UserActions.FETCH_PROFILE_SUCCESS:
      return {...state, profile:action.payload.profile};
    default:
      return state;
  }
}
