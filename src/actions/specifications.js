import {
  GET_SPECIFICATIONS,
  GET_SPECIFICATIONS_SUCCESS,
  GET_SPECIFICATIONS_FAIL,
  RESET_SPECIFICATIONS,
} from '../constants';

export function getSpecifications(subcategoryId) {
  return {
    types: [
      GET_SPECIFICATIONS,
      GET_SPECIFICATIONS_SUCCESS,
      GET_SPECIFICATIONS_FAIL,
    ],
    promise: fetch =>
      fetch(`/api/specifications/${subcategoryId}`, {
        method: 'GET',
      }),
  };
}

export function resetSpecifications() {
  return {
    type: RESET_SPECIFICATIONS,
  };
}
