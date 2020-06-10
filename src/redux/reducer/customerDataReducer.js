import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
}
from '../../Constants/typeActionRedux/typeAction'
import {
    FETCH_FORGOTPASSWORD_REQUEST,
    FETCH_FORGOTPASSWORD_SUCCESS,
    FETCH_FORGOTPASSWORD_FAILURE
}
from '../../Constants/typeActionRedux/typeAction'
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


const customerData = {
    loginData : [] ,
    forgotPassword  : [],
    contactUs : [],
    register : [],
    loading : true,
    error : ''
}

const CustomerDataReducer =(state = customerData , action)=>{
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading : true
            }
            break;
            case FETCH_LOGIN_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    loginData : action.payload,
                    error : ''
                }
                break;
                case FETCH_LOGIN_FAILURE:
                    return {
                        ...state,
                        loading : false,
                        loginData : [],
                        error : action.payload
                    }
                    break;
                    case FETCH_FORGOTPASSWORD_REQUEST:
                        return {
                            ...state,
                            loading : true
                        }
                        break;
                        case FETCH_FORGOTPASSWORD_SUCCESS:
                            return {
                                ...state,
                                loading : false,
                                forgotPassword : action.payload,
                                error : ''
                            }
                            break;
                            case FETCH_FORGOTPASSWORD_FAILURE:
                                return {
                                    ...state,
                                    loading : false,
                                    forgotPassword : [],
                                    error : action.payload
                                }
                                break;
                                case FETCH_CONTACTUS_REQUEST:
                                    return {
                                        ...state,
                                        loading : true
                                    }
                                    break;
                                    case FETCH_CONTACTUS_SUCCESS:
                                        return {
                                            ...state,
                                            loading : false,
                                            contactUs : action.payload,
                                            error : ''
                                        }
                                        break;
                                        case FETCH_CONTACTUS_FAILURE:
                                            return {
                                                ...state,
                                                loading : false,
                                                contactUs : [],
                                                error : action.payload
                                            }
                                            break;
                                            case FETCH_REGISTER_REQUEST:
                                    return {
                                        ...state,
                                        loading : true
                                    }
                                    break;
                                    case FETCH_REGISTER_SUCCESS:
                                        return {
                                            ...state,
                                            loading : false,
                                            register : action.payload,
                                            error : ''
                                        }
                                        break;
                                        case FETCH_REGISTER_FAILURE:
                                            return {
                                                ...state,
                                                loading : false,
                                                register : [],
                                                error : action.payload
                                            }
                                            break;
        default: return state
            break;
    }
}

export default CustomerDataReducer