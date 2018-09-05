import {
  GET_ALLCATEGORIES,
  GET_ALLCATEGORIES_SUCCESS,
  GET_ALLCATEGORIES_FAIL,
  RESET_ALLCATEGORIES,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function allCategories(state = initialState, action) {
  switch (action.type) {
    case GET_ALLCATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_ALLCATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_ALLCATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_ALLCATEGORIES:
      return initialState;
    default:
      return state;
  }
}
