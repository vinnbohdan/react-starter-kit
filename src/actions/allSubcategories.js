import {
  GET_ALLSUBCATEGORIES,
  GET_ALLSUBCATEGORIES_SUCCESS,
  GET_ALLSUBCATEGORIES_FAIL,
  RESET_ALLSUBCATEGORIES,
} from '../constants';

export function getAllSubcategories(categoryId) {
  return {
    types: [
      GET_ALLSUBCATEGORIES,
      GET_ALLSUBCATEGORIES_SUCCESS,
      GET_ALLSUBCATEGORIES_FAIL,
    ],
    promise: fetch =>
      fetch(`/api/subcategories/${categoryId}`, {
        method: 'GET',
      }),
  };
}

export function resetAllSubcategories() {
  return {
    type: RESET_ALLSUBCATEGORIES,
  };
}
