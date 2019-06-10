import axios from '../axios';

// @contants
import {
  GET_GNOMOS_REQUEST,
  GET_GNOMOS_SUCCESS,
  GET_GNOMOS_FAILURE,
  gnomosUrl
} from '../constants';

export const getGnomos = () => dispatch => {
  dispatch({
    type: GET_GNOMOS_REQUEST
  });

  axios
    .get(gnomosUrl)
    .then((res) => {
      dispatch({
        type: GET_GNOMOS_SUCCESS,
        payload: res.data.Brastlewark
      });
    })
    .catch(() => dispatch({
      type: GET_GNOMOS_FAILURE
    }));
};
