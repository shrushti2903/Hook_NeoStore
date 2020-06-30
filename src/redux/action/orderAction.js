import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import { apiUrl } from "../../Constants/api";
import { endOfApi, Customerorder } from "../../Constants/endFile";
import axios from "axios";

export const fetchCustomerOrderRequest = () => ({
    type : FETCH_ORDER_REQUEST,
});
export const fetchCustomerOrderSuccess = (customerOrder)=> ({
    type : FETCH_ORDER_SUCCESS ,
    payload : customerOrder ,
});
export const fetchCustomerOrderFailure = (error) => ({
    type : FETCH_ORDER_FAILURE ,
    payload  : error ,
});

export const fetchCustomerOrder = (id) => {
    return dispatch => {
        dispatch(fetchCustomerOrderRequest())
        return axios ({
            method : 'GET',
            url : `${apiUrl}${Customerorder}${id}`,
            headers : endOfApi,
        }).then (response => {
          const customerOrder = response.data.color_details
          dispatch(fetchCustomerOrderSuccess(customerOrder))
        })
        .catch (error =>{
            dispatch(fetchCustomerOrderFailure(error))
        })
    };
}

