import User from './user.model';
import {Challenge} from './challenge.model';
import {Config} from './config.model';

export default interface IAppState {
  user: User;
  challenges:Challenge;
  config:Config;
}
