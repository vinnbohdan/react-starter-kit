import {
  GET_ONEPRODUCTS,
  GET_ONEPRODUCTS_SUCCESS,
  GET_ONEPRODUCTS_FAIL,
  RESET_ONEPRODUCTS,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function productDetails(state = initialState, action) {
  switch (action.type) {
    case GET_ONEPRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_ONEPRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_ONEPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_ONEPRODUCTS:
      return initialState;
    default:
      return state;
  }
}
