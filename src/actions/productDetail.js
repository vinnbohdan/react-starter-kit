import {
  GET_ONEPRODUCTS,
  GET_ONEPRODUCTS_SUCCESS,
  GET_ONEPRODUCTS_FAIL,
  RESET_ONEPRODUCTS,
} from '../constants';

export function getproductDetails(productId) {
  return {
    types: [GET_ONEPRODUCTS, GET_ONEPRODUCTS_SUCCESS, GET_ONEPRODUCTS_FAIL],
    promise: fetch =>
      fetch(`/api/products/${productId}`, {
        method: 'GET',
      }),
  };
}

export function resetproductDetails() {
  return {
    type: RESET_ONEPRODUCTS,
  };
}
