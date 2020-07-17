import {
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_REQUEST,
} from "../../Constants/typeActionRedux/typeAction";
import axios from "axios";
import { apiUrl } from "../../Constants/api";
import {
  FETCH_CATEGORYID_REQUEST,
  FETCH_CATEGORYID_SUCCESS,
  FETCH_CATEGORYID_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import { endOfApi, allCategory, categoryById } from "../../Constants/endFile";

export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});
export const fetchCategorySuccess = (categories) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: categories,
});
export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchCategoryRequest());
    return axios({
      method: "GET",
      url: `${apiUrl}${allCategory}`,
      headers: endOfApi,
    })
      .then((response) => {
        const categoriesList =
          response && response.data && response.data.category_details;
        dispatch(fetchCategorySuccess(categoriesList));
      })
      .catch((error) => {
        dispatch(fetchCategoryFailure(error));
      });
  };
};

export const fetchCategoryidRequest = () => {
  return {
    type: FETCH_CATEGORYID_REQUEST,
  };
};
export const fetchCategoryidSuccess = (categoryId) => {
  return {
    type: FETCH_CATEGORYID_SUCCESS,
    payload: categoryId,
  };
};
export const fetchCategoryidFailur = (error) => {
  return {
    type: FETCH_CATEGORYID_FAILURE,
    payload: error,
  };
};
export const fetchCategoryId = (id) => {
  return (dispatch) => {
    dispatch(fetchCategoryidRequest());
    return axios({
      method: "GET",
      url: `${apiUrl}${categoryById}${id}`,
      headers: endOfApi,
    })
      .then((response) => {
        const categoryId =
          response && response.data && response.data.product_details;
        dispatch(fetchCategoryidSuccess(categoryId));
      })
      .catch((error) => {
        dispatch(fetchCategoryidFailur(error));
      });
  };
};
