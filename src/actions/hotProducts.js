import {
  GET_HOTPRODUCTS,
  GET_HOTPRODUCTS_SUCCESS,
  GET_HOTPRODUCTS_FAIL,
  RESET_HOTPRODUCTS,
} from '../constants';

export function getHotProducts() {
  return {
    types: [GET_HOTPRODUCTS, GET_HOTPRODUCTS_SUCCESS, GET_HOTPRODUCTS_FAIL],
    promise: fetch =>
      fetch(`/api/products/?hot=true&page=1`, {
        method: 'GET',
      }),
  };
}

export function resetHotProducts() {
  return {
    type: RESET_HOTPRODUCTS,
  };
}
