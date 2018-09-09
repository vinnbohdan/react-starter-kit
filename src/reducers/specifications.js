import {
  GET_SPECIFICATIONS,
  GET_SPECIFICATIONS_SUCCESS,
  GET_SPECIFICATIONS_FAIL,
  RESET_SPECIFICATIONS,
} from '../constants';

const initialState = { items: [], loading: false, total: 0 };
export default function specifications(state = initialState, action) {
  switch (action.type) {
    case GET_SPECIFICATIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_SPECIFICATIONS_SUCCESS:
      return {
        ...state,
        items: action.result.json,
        total: action.result.total,
        loading: false,
      };
    case GET_SPECIFICATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_SPECIFICATIONS:
      return initialState;
    default:
      return state;
  }
}
