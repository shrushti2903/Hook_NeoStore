import {
    FETCH_GETFOOTERDATA_REQUEST,
    FETCH_GETFOOTERDATA_SUCCESS,
    FETCH_GETFOOTERDATA_FAILURE
}
from '../../Constants/typeActionRedux/typeAction'
import {
    FETCH_GETTERMSANDCONDITIONS_REQUEST ,
    FETCH_GETTERMSANDCONDITIONS_SUCCESS ,
    FETCH_GETTERMSANDCONDITIONS_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_GETGAURENTEE_REQUEST,
    FETCH_GETGAURENTEE_SUCCESS,
    FETCH_GETGAURENTEE_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import axios from 'axios';
import {apiUrl} from '../../Constants/api';
import {endOfApi, 
       } 
        from '../../Constants/endFile';

export const fetchGetFooterDataRequest = ()=>({
    type : FETCH_GETFOOTERDATA_REQUEST
});
export const fetchGetFooterDataSuccess = (getFooterData)=>({
    type : FETCH_GETFOOTERDATA_SUCCESS,
    payload : getFooterData
});
export const fetchGetFooterDataFailure = (error)=>({
    type : FETCH_GETFOOTERDATA_FAILURE,
    payload : error
});

export const fetchGetFooterData =()=>{
    return dispatch => {
        dispatch(fetchGetFooterDataRequest());

        return axios({
            method: 'GET',
            url:  'http://180.149.241.208:3022/getData',
            headers : endOfApi,
        }).then(response => {
            const getFooterData = response && response.data && response.data.company_details;
            console.log('footer data',getFooterData)
            dispatch(fetchGetFooterDataSuccess(getFooterData))
        })
            .catch(error => {
                dispatch(fetchGetFooterDataFailure(error))
            });
    }
}

export const fetchGetTermsAndConditionsRequest = ()=>({
    type : FETCH_GETTERMSANDCONDITIONS_REQUEST
});
export const fetchGetTermsAndConditionsSuccess = (getTermsAndConditions)=>({
    type : FETCH_GETTERMSANDCONDITIONS_SUCCESS,
    payload : getTermsAndConditions,
});
export const fetchGetTermsAndConditionsFailure = (error)=>({
    type : FETCH_GETTERMSANDCONDITIONS_FAILURE,
    payload : error,
});

export const fetchGetTermsAndConditions =()=>{
    return dispatch => {
        dispatch(fetchGetTermsAndConditionsRequest());

        return axios({
            method: 'GET',
            url:  'http://180.149.241.208:3022/getTermsAndConditions',
            headers : endOfApi,
        }).then(response => {
            const getTermsAndConditionsData = response && response.data && response.data.termsAndConditions_details;
            dispatch(fetchGetTermsAndConditionsSuccess(getTermsAndConditionsData))
        })
            .catch(error => {
                dispatch(fetchGetTermsAndConditionsFailure(error))
            });
    }
}

export const fetchGetGaurenteeRequest = ()=>({
    type : FETCH_GETGAURENTEE_REQUEST
});
export const fetchGetGaurenteeSuccess = (getGuarantee)=>({
    type : FETCH_GETGAURENTEE_SUCCESS,
    payload : getGuarantee
});
export const fetchGetGaurenteeFailure = (error)=>({
    type : FETCH_GETGAURENTEE_FAILURE,
    payload : error
});

export const fetchGetGaurentee =()=>{
    return dispatch => {
        dispatch(fetchGetGaurenteeRequest());

        return axios({
            method: 'GET',
            url:  'http://180.149.241.208:3022/getGuarantee',
            headers : endOfApi,
        }).then(response => {
            const getGuarantee = response && response.data && response.data.guarantee_details;
            dispatch(fetchGetGaurenteeSuccess(getGuarantee))
        })
            .catch(error => {
                dispatch(fetchGetGaurenteeFailure(error))
            });
    }
}