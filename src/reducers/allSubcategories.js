import {
  GET_ALLSUBCATEGORIES,
  GET_ALLSUBCATEGORIES_SUCCESS,
  GET_ALLSUBCATEGORIES_FAIL,
  RESET_ALLSUBCATEGORIES,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function allSubcategories(state = initialState, action) {
  switch (action.type) {
    case GET_ALLSUBCATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_ALLSUBCATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_ALLSUBCATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_ALLSUBCATEGORIES:
      return initialState;
    default:
      return state;
  }
}
