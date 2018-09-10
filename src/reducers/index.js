import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categories from './categories';
import hotProducts from './hotProducts';
import allProducts from './allProducts';
import productDetails from './productDetails';
import allCategories from './allCategories';
import allSubcategories from './allSubcategories';
import specifications from './specifications';
import runtime from './runtime';

export default combineReducers({
  runtime,
  categories,
  hotProducts,
  allProducts,
  allCategories,
  allSubcategories,
  productDetails,
  specifications,
  form: formReducer,
});
