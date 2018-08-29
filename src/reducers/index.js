import { combineReducers } from 'redux';
import categories from './categories';
import runtime from './runtime';

export default combineReducers({
  runtime,
  categories,
});
