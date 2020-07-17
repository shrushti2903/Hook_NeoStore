import {
  FETCH_COLOR_REQUEST,
  FETCH_COLOR_SUCCESS,
  FETCH_COLOR_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import axios from "axios";
import {
  FETCH_COLORID_REQUEST,
  FETCH_COLORID_SUCCESS,
  FETCH_COLORID_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import { apiUrl } from "../../Constants/api";
import { endOfApi, allColor, colorById } from "../../Constants/endFile";

export const fetchColorRequest = () => ({
  type: FETCH_COLOR_REQUEST,
});
export const fetchColorSuccess = (color) => ({
  type: FETCH_COLOR_SUCCESS,
  payload: color,
});
export const fetchColorFailure = (error) => ({
  type: FETCH_COLOR_FAILURE,
  payload: error,
});

export const fetchColor = () => {
  return (dispatch) => {
    dispatch(fetchColorRequest());
    return axios({
      method: "GET",
      url: `${apiUrl}${allColor}`,
      headers: endOfApi,
    })
      .then((response) => {
        const colorList = response.data.color_details;
        dispatch(fetchColorSuccess(colorList));
      })
      .catch((error) => {
        dispatch(fetchColorFailure(error));
      });
  };
};

export const fetchColorIdRequest = () => {
  return {
    type: FETCH_COLORID_REQUEST,
  };
};
export const fetchColorIdSuccess = (colorId) => {
  return {
    type: FETCH_COLORID_SUCCESS,
    payload: colorId,
  };
};
export const fetchColorIdFailure = (error) => {
  return {
    type: FETCH_COLORID_FAILURE,
    payload: error,
  };
};
export const fetchColorId = (id) => {
  return (dispatch) => {
    dispatch(fetchColorIdRequest());
    return axios({
      method: "GET",
      url: `${apiUrl}${colorById}${id}`,
      headers: endOfApi,
    })
      .then((response) => {
        const colorId =
          response && response.data && response.data.product_details;
        dispatch(fetchColorIdSuccess(colorId));
      })
      .catch((error) => {
        dispatch(fetchColorIdFailure(error));
      });
  };
};
