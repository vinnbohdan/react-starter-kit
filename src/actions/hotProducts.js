import {
  GET_HOTPRODUCTS,
  GET_HOTPRODUCTS_SUCCESS,
  GET_HOTPRODUCTS_FAIL,
  RESET_HOTPRODUCTS,
} from '../constants';

export function getHotProducts(query) {
  return {
    types: [GET_HOTPRODUCTS, GET_HOTPRODUCTS_SUCCESS, GET_HOTPRODUCTS_FAIL],
    promise: fetch =>
      fetch(`/api/products/?isHot=true&page=1&${query}`, {
        method: 'GET',
      }),
  };
}

export function resetHotProducts() {
  return {
    type: RESET_HOTPRODUCTS,
  };
}
