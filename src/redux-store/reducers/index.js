import { combineReducers } from 'redux';
// reducers
import app from './app';
import liveExample from './live-example';

export default combineReducers({
  app,
  liveExample,
});
