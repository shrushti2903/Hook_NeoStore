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

const cartData = {
    allCartData : [] ,
    deletProductData : [],
    loading : true,
    error : ''
}

const CartDataReducer =(state = cartData , action)=>{
    switch (action.type) {
        case FETCH_ALLCARTDATA_REQUEST:
            return {
                ...state,
                loading : true
            }
            break;
            case FETCH_ALLCARTDATA_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    allCartData : action.payload,
                    error : ''
                }
                break;
                case FETCH_ALLCARTDATA_FAILURE:
                    return {
                        ...state,
                        loading : false,
                        allCartData : [],
                        error : action.payload
                    }
                    break;
                    case FETCH_DELETPRODUCTBYPRODUCTID_REQUEST:
                        return {
                            ...state,
                            loading : true
                        }
                        break;
                        case FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS:
                            return {
                                ...state,
                                loading : false,
                                deletProductData : action.payload,
                                error : ''
                            }
                            break;
                            case FETCH_DELETPRODUCTBYPRODUCTID_FAILURE:
                                return {
                                    ...state,
                                    loading : false,
                                    deletProductData : [],
                                    error : action.payload
                                }
                                break;
        default: return state
            break;
    }
}

export default CartDataReducer