// @constans
import {
  GET_GNOMOS_REQUEST,
  GET_GNOMOS_SUCCESS,
  GET_GNOMOS_FAILURE
} from '../constants';

const initialState = {
  data: [],
  error: false,
  loading: false
};

function gnomosReducer (state=initialState, action) {
  switch(action.type) {
    case GET_GNOMOS_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      };
    case GET_GNOMOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case GET_GNOMOS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default gnomosReducer;
