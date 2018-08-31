import {
  GET_HOTPRODUCTS,
  GET_HOTPRODUCTS_SUCCESS,
  GET_HOTPRODUCTS_FAIL,
  RESET_HOTPRODUCTS,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function hotProducts(state = initialState, action) {
  switch (action.type) {
    case GET_HOTPRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_HOTPRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_HOTPRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_HOTPRODUCTS:
      return initialState;
    default:
      return state;
  }
}
