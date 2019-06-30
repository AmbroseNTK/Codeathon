import { Challenge } from '../models/challenge.model';
import { All, ChallengeActions } from '../actions/challenge.action';
import { ChallengeEntityModel } from '../models/challenge.entity.model';


const defaultChallenge: Challenge = {
  list: new Array<ChallengeEntityModel>()
};

export function challengeReducer(state: Challenge = defaultChallenge, action: All) {
  switch (action.type) {
    case ChallengeActions.FETCH_SUCCESS:
      return { ...state, list: <Array<ChallengeEntityModel>>action.payload.challenge };
    case ChallengeActions.FETCH_OWN_SUCCESS:
      return { ...state, list: <Array<ChallengeEntityModel>>action.payload.challenge };
    case ChallengeActions.FETCH_OWN_FAILED:
      return { ...state, list: [] };
    default:
      return state;
  }
}