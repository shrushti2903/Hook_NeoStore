import {FETCH_ALLCARTDATA_REQUEST,
    FETCH_ALLCARTDATA_SUCCESS,
    FETCH_ALLCARTDATA_FAILURE}
    from '../../Constants/typeActionRedux/typeAction';
import axios from 'axios'
import {apiUrl} from '../../Constants/api';
import {endOfApi, 
        allCartData} 
        from '../../Constants/endFile';


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

