import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  RESET_CATEGORIES,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function categories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_CATEGORIES:
      return initialState;
    default:
      return state;
  }
}
