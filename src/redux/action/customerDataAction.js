import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
}
from '../../Constants/typeActionRedux/typeAction'
import {apiUrl} from '../../Constants/api';
import axios from 'axios'
import {endOfApi, 
    } 
    from '../../Constants/endFile';
import {
    FETCH_FORGOTPASSWORD_REQUEST,
    FETCH_FORGOTPASSWORD_SUCCESS,
    FETCH_FORGOTPASSWORD_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_CONTACTUS_REQUEST ,
    FETCH_CONTACTUS_SUCCESS ,
    FETCH_CONTACTUS_FAILURE ,
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
}
from '../../Constants/typeActionRedux/typeAction';

export const fetchLoginRequest = ()=>({
    type : FETCH_LOGIN_REQUEST
});
export const fetchLoginSuccess = (loginData) =>({
    type : FETCH_LOGIN_SUCCESS,
    payload : loginData
});
export const fetchLoginFailure = (error)=>({
    type : FETCH_LOGIN_FAILURE,
    payload : error
});

export const fetchLoginData = (user) => {
    return dispatch => {
        dispatch(fetchLoginRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}login`,
            headers : endOfApi,
            data : user,
        }).then(response => {
            const login = response.data
            dispatch(fetchLoginSuccess(login))
        })
            .catch(error => {
                dispatch(fetchLoginFailure(error))
            });
    }
}

export const fetchForgotPasswordRequest = () =>({
    type : FETCH_FORGOTPASSWORD_REQUEST
});
export const fetchForgotPasswordSuccess = (forgotPassword) =>({
    type : FETCH_FORGOTPASSWORD_SUCCESS,
    payload : forgotPassword
});
export const fetchForgotPasswordFailure = (error)=>({
    type : FETCH_FORGOTPASSWORD_FAILURE,
    payload : error
})

export const fetchForgotPassworData = (user) => {
    return dispatch => {
        dispatch(fetchForgotPasswordRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}forgotPassword`,
            headers : endOfApi,
            data : user,
        }).then(response => {
            const forgotPassword = response.data
            dispatch(fetchForgotPasswordSuccess(forgotPassword))
        })
            .catch(error => {
                dispatch(fetchForgotPasswordFailure(error))
            });
    }
}

export const fetchContactUsRequest = () =>({
    type : FETCH_CONTACTUS_REQUEST
});
export const fetchContactUsSuccess = (contactUs) =>({
    type : FETCH_CONTACTUS_SUCCESS,
    payload : contactUs
});
export const fetchContactUsFailure = (error)=>({
    type : FETCH_CONTACTUS_FAILURE,
    payload : error
});

export const fetchContactUsData = (user) => {
    return dispatch => {
        dispatch(fetchContactUsRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}contactUs`,
            headers : endOfApi,
            data : user,
        }).then(response => {
            const contactUs = response.data
            dispatch(fetchContactUsSuccess(contactUs))
        })
            .catch(error => {
                dispatch(fetchContactUsFailure(error))
            });
    }
}

export const fetchRegisterRequest = ()=>({
    type : FETCH_REGISTER_REQUEST
});
export const fetchRegisterSuccess = (register) =>({
    type : FETCH_REGISTER_SUCCESS,
    payload : register
});
export const fetchRegisterFailure = (error)=>({
    type : FETCH_REGISTER_FAILURE,
    payload : error
});

export const fetchRegisterData = (user) => {
    return dispatch => {
        dispatch(fetchRegisterRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}register`,
            headers : endOfApi,
            data : user,
        }).then(response => {
            const register = response.data
            dispatch(fetchRegisterSuccess(register))
        })
            .catch(error => {
                dispatch(fetchRegisterFailure(error))
            });
    }
}

