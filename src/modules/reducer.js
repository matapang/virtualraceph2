import { combineReducers } from 'redux';
import user from './user';
import races from './races';

export default combineReducers({
  user,
  races
})