import {
  GET_ALLCATEGORIES,
  GET_ALLCATEGORIES_SUCCESS,
  GET_ALLCATEGORIES_FAIL,
  RESET_ALLCATEGORIES,
} from '../constants';

export function getAllCategories() {
  return {
    types: [
      GET_ALLCATEGORIES,
      GET_ALLCATEGORIES_SUCCESS,
      GET_ALLCATEGORIES_FAIL,
    ],
    promise: fetch =>
      fetch(`/api/categories`, {
        method: 'GET',
      }),
  };
}

export function resetAllCategories() {
  return {
    type: RESET_ALLCATEGORIES,
  };
}
