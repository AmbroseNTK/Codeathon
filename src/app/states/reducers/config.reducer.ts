import {Config} from '../models/config.model';
import {All, ConfigActions} from '../actions/config.action';

const defaultConfig:Config={
  backend:""
};

export function configReducer(state:Config = defaultConfig, action:All){
  switch (action.type) {
    case ConfigActions.FETCH_SUCCESS:
      return {...action.payload.config};
    default:
      return state;
  }
}
