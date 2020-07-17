import {
  FETCH_ALLCARTDATA_REQUEST,
  FETCH_ALLCARTDATA_SUCCESS,
  FETCH_ALLCARTDATA_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_DELETPRODUCTBYPRODUCTID_REQUEST,
  FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS,
  FETCH_DELETPRODUCTBYPRODUCTID_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import axios from "axios";
import { apiUrl } from "../../Constants/api";
import {
  endOfApi,
  allCartData,
  deleteCartDataById,
} from "../../Constants/endFile";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  FETCH_ADDTOCARTDATA_REQUEST,
  FETCH_ADDTOCARTDATA_SUCCESS,
  FETCH_ADDTOCARTDATA_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_GETCARTDATA_REQUEST,
  FETCH_GETCARTDATA_SUCCESS,
  FETCH_GETCARTDATA_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";

export const fetchAllCartDataRequest = () => ({
  type: FETCH_ALLCARTDATA_REQUEST,
});
export const fetchAllCartDataSuccess = (allCartData) => ({
  type: FETCH_ALLCARTDATA_SUCCESS,
  payload: allCartData,
});
export const fetchAllCartDataFailure = (error) => ({
  type: FETCH_ALLCARTDATA_FAILURE,
  payload: error,
});

export const fetchAllCartData = () => {
  return (dispatch) => {
    dispatch(fetchAllCartDataRequest());

    return axios({
      method: "GET",
      url: `${apiUrl}${allCartData}`,
      headers: endOfApi,
    })
      .then((response) => {
        const allCartData =
          response && response.data && response.data.product_details;
        const allCartDataLength = allCartData.length;
        dispatch(fetchAllCartDataSuccess(allCartData, allCartDataLength));
      })
      .catch((error) => {
        dispatch(fetchAllCartDataFailure(error));
      });
  };
};

export const fetchDeletProductByProductIdRequest = () => ({
  type: FETCH_DELETPRODUCTBYPRODUCTID_REQUEST,
});
export const fetchDeletProductByProductIdSuccess = (deletProductData) => ({
  type: FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS,
  payload: deletProductData,
});
export const fetchDeletProductByProductIdFailure = (error) => ({
  type: FETCH_DELETPRODUCTBYPRODUCTID_FAILURE,
  payload: error,
});

export const fetchDeletProductByProductId = (productId, id) => {
  return (dispatch) => {
    dispatch(fetchDeletProductByProductIdRequest());
    const id = localStorage.getItem("token");
    return axios({
      method: "DELETE",
      url: `${apiUrl}${deleteCartDataById}${productId}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${id}`,
      },
    })
      .then((response) => {
        const deleteProductData = response && response.data;
        dispatch(fetchDeletProductByProductIdSuccess(deleteProductData));
      })
      .catch((error) => {
        dispatch(fetchDeletProductByProductIdFailure(error));
      });
  };
};

export const fetchAddToCartRequest = () => ({
  type: FETCH_ADDTOCARTDATA_REQUEST,
});
export const fetchAddToCartSuccess = (addToCart) => ({
  type: FETCH_ADDTOCARTDATA_SUCCESS,
  payload: addToCart,
});
export const fetchAddToCartFailure = (error) => ({
  type: FETCH_ADDTOCARTDATA_FAILURE,
  payload: error,
});

export const fetchAddToCart = (user, token) => {
  return (dispatch) => {
    dispatch(fetchAddToCartRequest());
    return axios({
      method: "POST",
      url: `${apiUrl}addDataToCart`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      data: user,
    })
      .then((response) => {
        const addToCart = response.data;
        dispatch(fetchAddToCartSuccess(addToCart));
      })
      .catch((error) => {
        dispatch(fetchAddToCartFailure(error));
      });
  };
};

export const fetchGetCartDataRequest = () => ({
  type: FETCH_GETCARTDATA_REQUEST,
});
export const fetchGetCartDataSuccess = (getCartData) => ({
  type: FETCH_GETCARTDATA_SUCCESS,
  payload: getCartData,
});
export const fetchGetCartDataFailure = (error) => ({
  type: FETCH_GETCARTDATA_FAILURE,
  payload: error,
});

export const fetchGetCartData = (id) => {
  return (dispatch) => {
    dispatch(fetchGetCartDataRequest());
    return axios({
      method: "GET",
      url: `${apiUrl}getCartData `,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${id}`,
      },
    })
      .then((response) => {
        const getCartData = response.data;
        dispatch(fetchGetCartDataSuccess(getCartData));
      })
      .catch((error) => {
        dispatch(fetchGetCartDataFailure(error));
      });
  };
};
