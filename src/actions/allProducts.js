import {
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_SUCCESS,
  GET_ALLPRODUCTS_FAIL,
  RESET_ALLPRODUCTS,
} from '../constants';

export function getAllProducts() {
  return {
    types: [GET_ALLPRODUCTS, GET_ALLPRODUCTS_SUCCESS, GET_ALLPRODUCTS_FAIL],
    promise: fetch =>
      fetch(`/api/products/:id`, {
        method: 'GET',
      }),
  };
}

export function resetAllProducts() {
  return {
    type: RESET_ALLPRODUCTS,
  };
}
