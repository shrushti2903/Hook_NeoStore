import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
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
import {
    FETCH_CUSTOMERADDRESS_REQUEST,
    FETCH_CUSTOMERADDRESS_SUCCESS,
    FETCH_CUSTOMERADDRESS_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_CUSTOMERPROFILE_REQUEST,
    FETCH_CUSTOMERPROFILE_SUCCESS,
    FETCH_CUSTOMERPROFILE_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_CUSTOMERUPDATEADDRESS_REQUEST,
    FETCH_CUSTOMERUPDATEADDRESS_SUCCESS,
    FETCH_CUSTOMERUPDATEADDRESS_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_ADDADDRESS_REQUEST,
    FETCH_ADDADDRESS_SUCCESS,
    FETCH_ADDADDRESS_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_DELADDRESSBYADDRESSID_REQUEST,
    FETCH_DELADDRESSBYADDRESSID_SUCCESS,
    FETCH_DELADDRESSBYADDRESSID_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_ADDPRODUCTTOCARTCHECKOUT_REQUEST,
    FETCH_ADDPRODUCTTOCARTCHECKOUT_SUCCESS,
    FETCH_ADDPRODUCTTOCARTCHECKOUT_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_ADDTOCARTDATA_REQUEST,
    FETCH_ADDTOCARTDATA_SUCCESS,
    FETCH_ADDTOCARTDATA_FAILURE
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

export const fetchLoginData =  (user) => {
    return dispatch => {
        dispatch(fetchLoginRequest());
        return  axios({
            method: 'POST',
            url:  'http://180.149.241.208:3022/login',
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

export const fetchCustomerAddressRequest = ()=>({
    type : FETCH_CUSTOMERADDRESS_REQUEST
});
export const fetchCustomerAddressSuccess = (customerAddress) =>({
    type : FETCH_CUSTOMERADDRESS_SUCCESS,
    payload : customerAddress
});
export const fetchCustomerAddressFailure = (error)=>({
    type : FETCH_CUSTOMERADDRESS_FAILURE,
    payload : error
});

export const fetchCustomerAddress = (id) => {
    return dispatch => {
        dispatch(fetchCustomerAddressRequest());
        return axios({
            method: 'GET',
            url:  `${apiUrl}getCustAddress`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },
        }).then(response => {
            const customerAddress = response.data
            dispatch(fetchCustomerAddressSuccess(customerAddress))
        })
            .catch(error => {
                dispatch(fetchCustomerAddressFailure(error))
            });
    }
}

export const fetchCustomerProfileRequest = ()=>({
    type : FETCH_CUSTOMERPROFILE_REQUEST
});
export const fetchCustomerProfileSuccess = (customerProfile) =>({
    type : FETCH_CUSTOMERPROFILE_SUCCESS,
    payload : customerProfile
});
export const fetchCustomerProfileFailure = (error)=>({
    type : FETCH_CUSTOMERPROFILE_FAILURE,
    payload : error
});

export const fetchCustomerProfile = (user , id) => {
    return dispatch => {
        dispatch(fetchCustomerProfileRequest());
        return axios({
            method: 'PUT',
            url:  `${apiUrl}profile`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },
            data : user,
        }).then(response => {
            const customerProfile = response.data
            dispatch(fetchCustomerProfileSuccess(customerProfile))
        })
            .catch(error => {
                dispatch(fetchCustomerProfileFailure(error))
            });
    }
}

export const fetchCustomerUpdateAddressRequest = ()=>({
    type : FETCH_CUSTOMERUPDATEADDRESS_REQUEST
});
export const fetchCustomerUpdateAddressSuccess = (updateAddress) =>({
    type : FETCH_CUSTOMERUPDATEADDRESS_SUCCESS,
    payload : updateAddress
});
export const fetchCustomerUpdateAddressFailure = (error)=>({
    type : FETCH_CUSTOMERUPDATEADDRESS_FAILURE,
    payload : error
});

export const fetchCustomerUpdateAddress = (user , id) => {
    return dispatch => {
        dispatch(fetchCustomerUpdateAddressRequest());
        return axios({
            method: 'PUT',
            url:  `${apiUrl}updateAddress`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },
            data : user,
        }).then(response => {
            const updateAddress = response.data
            dispatch(fetchCustomerUpdateAddressSuccess(updateAddress))
        })
            .catch(error => {
                dispatch(fetchCustomerUpdateAddressFailure(error))
            });
    }
}

export const fetchAddAddressRequest = ()=>({
    type : FETCH_ADDADDRESS_REQUEST
});
export const fetchAddAddressSuccess = (addAddress) =>({
    type : FETCH_ADDADDRESS_SUCCESS,
    payload : addAddress
});
export const fetchAddAddressFailure = (error)=>({
    type : FETCH_ADDADDRESS_FAILURE,
    payload : error
});

export const fetchAddAddress = (user , id) => {
    return dispatch => {
        dispatch(fetchAddAddressRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}address`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },
            data : user,
        }).then(response => {
            const addAddress = response.data
            dispatch(fetchAddAddressSuccess(addAddress))
        })
            .catch(error => {
                dispatch(fetchAddAddressFailure(error))
            });
    }
}

export const fetchDelAddressByAddressIdRequest = ()=>({
    type : FETCH_DELADDRESSBYADDRESSID_REQUEST
});
export const fetchDelAddressByAddressIdSuccess = (delAddressByAddressId) =>({
    type : FETCH_DELADDRESSBYADDRESSID_SUCCESS,
    payload : delAddressByAddressId
});
export const fetchDelAddressByAddressIdFailure = (error)=>({
    type : FETCH_DELADDRESSBYADDRESSID_FAILURE,
    payload : error
});

export const fetchDelAddressByAddressId = (addressId , id) => {
    return dispatch => {
        dispatch(fetchDelAddressByAddressIdRequest());
        return axios({
            method: 'DELETE',
            url:  `${apiUrl}deladdress/${addressId}`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${id}` ,
            },
        }).then(response => {
            const delAddressByAddressId = response.data
            dispatch(fetchDelAddressByAddressIdSuccess(delAddressByAddressId))
        })
            .catch(error => {
                dispatch(fetchDelAddressByAddressIdFailure(error))
            });
    }
}


export const fetchAddProductToCartCheckoutRequest = ()=>({
    type : FETCH_ADDPRODUCTTOCARTCHECKOUT_REQUEST
});
export const fetchAddProductToCartCheckoutSuccess = (addProductToCheckout) =>({
    type : FETCH_ADDPRODUCTTOCARTCHECKOUT_SUCCESS,
    payload : addProductToCheckout
});
export const fetchAddProductToCartCheckoutFailure = (error)=>({
    type : FETCH_ADDPRODUCTTOCARTCHECKOUT_FAILURE,
    payload : error
});

export const fetchAddProductToCartCheckout = (user , token) => {
    console.log(user)
    return dispatch => {
        dispatch(fetchAddProductToCartCheckoutRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}addProductToCartCheckout`,
            headers : { Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `bearer ${token}` ,
            },
            data : user  ,
        }).then(response => {
            console.log(response)
            const addProductToCheckout = response.data
            dispatch(fetchAddProductToCartCheckoutSuccess(addProductToCheckout))
        })
            .catch(error => {
                dispatch(fetchAddProductToCartCheckoutFailure(error))
            });
    }
}





