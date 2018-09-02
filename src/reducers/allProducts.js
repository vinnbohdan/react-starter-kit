import {
  GET_ALLPRODUCTS,
  GET_ALLPRODUCTS_SUCCESS,
  GET_ALLPRODUCTS_FAIL,
  RESET_ALLPRODUCTS,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function allProducts(state = initialState, action) {
  switch (action.type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALLPRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_ALLPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_ALLPRODUCTS:
      return initialState;
    default:
      return state;
  }
}
