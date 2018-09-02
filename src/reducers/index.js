import { combineReducers } from 'redux';
import categories from './categories';
import hotProducts from './hotProducts';
import allProducts from './allProducts';
import runtime from './runtime';

export default combineReducers({
  runtime,
  categories,
  hotProducts,
  allProducts,
});
