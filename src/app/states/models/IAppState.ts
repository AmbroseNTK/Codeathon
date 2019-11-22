import User from './user.model';
import { Challenge } from './challenge.model';
import { Config } from './config.model';
import { Categories } from './categories.model';

export default interface IAppState {
  user: User;
  challenges: Challenge;
  config: Config;
  categories: Categories;
  people: {}
}
