import {
  GET_SEARCHPRODUCTS,
  GET_SEARCHPRODUCTS_SUCCESS,
  GET_SEARCHPRODUCTS_FAIL,
  RESET_SEARCHPRODUCTS,
} from '../constants';

export function getSearchProducts(val) {
  return {
    types: [
      GET_SEARCHPRODUCTS,
      GET_SEARCHPRODUCTS_SUCCESS,
      GET_SEARCHPRODUCTS_FAIL,
    ],
    promise: fetch => {
      if (val) {
        fetch(`/api/products/?search=${val}`, {
          method: 'GET',
        });
      } else {
        fetch(`/api/products/`, {
          method: 'GET',
        });
      }
    },
  };
}

export function resetSearchProducts() {
  return {
    type: RESET_SEARCHPRODUCTS,
  };
}
