import {
  GET_SEARCHPRODUCTS,
  GET_SEARCHPRODUCTS_SUCCESS,
  GET_SEARCHPRODUCTS_FAIL,
  RESET_SEARCHPRODUCTS,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function searchProducts(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHPRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCHPRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_SEARCHPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_SEARCHPRODUCTS:
      return initialState;
    default:
      return state;
  }
}
