import {FETCH_ALLCARTDATA_REQUEST,
    FETCH_ALLCARTDATA_SUCCESS,
    FETCH_ALLCARTDATA_FAILURE}
    from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_DELETPRODUCTBYPRODUCTID_REQUEST,
    FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS,
    FETCH_DELETPRODUCTBYPRODUCTID_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import axios from 'axios'
import {apiUrl} from '../../Constants/api';
import {endOfApi, 
        allCartData,
        deleteCartDataById} 
        from '../../Constants/endFile';
import { RiErrorWarningLine } from 'react-icons/ri';


export const fetchAllCartDataRequest = ()=>({
    type : FETCH_ALLCARTDATA_REQUEST
});
export const fetchAllCartDataSuccess = (allCartData) =>({
    type : FETCH_ALLCARTDATA_SUCCESS,
    payload : allCartData
});
export const fetchAllCartDataFailure = (error)=>({
    type : FETCH_ALLCARTDATA_FAILURE,
    payload : error
    
});

export const fetchAllCartData =()=>{
    return dispatch => {
        dispatch(fetchAllCartDataRequest());

        return axios({
            method: 'GET',
            url:  `${apiUrl}${allCartData}`,
            headers : endOfApi,
        }).then(response => {
            const allCartData = response && response.data && response.data.product_details;
            const allCartDataLength = allCartData.length;
            dispatch(fetchAllCartDataSuccess(allCartData , allCartDataLength))
        })
            .catch(error => {
                dispatch(fetchAllCartDataFailure(error))
            });
    }
}

export const fetchDeletProductByProductIdRequest = ()=>({
    type: FETCH_DELETPRODUCTBYPRODUCTID_REQUEST
});
export const fetchDeletProductByProductIdSuccess = (deletProductData) =>({
    type : FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS,
    payload : deletProductData
});
export const fetchDeletProductByProductIdFailure = (error)=>({
    type : FETCH_DELETPRODUCTBYPRODUCTID_FAILURE,
    payload : error
})

export const fetchDeletProductByProductId =(productId , id)=>{
    return dispatch => {
        dispatch(fetchDeletProductByProductIdRequest());
        const id = localStorage.getItem('token')
        return axios({
            method: 'DELETE',
            url:  `http://180.149.241.208:3022/${deleteCartDataById}${productId}`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },

        }).then(response => {
            const deleteProductData = response && response.data ;
            dispatch(fetchDeletProductByProductIdSuccess(deleteProductData))
        })
            .catch(error => {
                dispatch(fetchDeletProductByProductIdFailure(error))
            });
    }
}