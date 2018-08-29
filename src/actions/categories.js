import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  RESET_CATEGORIES,
} from '../constants';

export function getCategories() {
  return {
    types: [GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL],
    promise: fetch =>
      fetch(`/api/categories`, {
        method: 'GET',
      }),
  };
}

export function resetCategories() {
  return {
    type: RESET_CATEGORIES,
  };
}
