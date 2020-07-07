import {FETCH_PRODUCT_REQUEST,
        FETCH_PRODUCT_SUCCESS,
        FETCH_PRODUCT_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_ALLPRODUCT_REQUEST,
        FETCH_ALLPRODUCT_SUCCESS,
        FETCH_ALLPRODUCT_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_DESCENDINGPRODUCT_REQUEST,
    FETCH_DESCENDINGPRODUCT_SUCCESS,
    FETCH_DESCENDINGPRODUCT_FAILURE}  
    from '../../Constants/typeActionRedux/typeAction';
import  {FETCH_ASCENDINGPRODUCT_REQUEST, 
        FETCH_ASCENDINGPRODUCT_SUCCESS ,
        FETCH_ASCENDINGPRODUCT_FAILURE}
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_ALLPRODUCTINHIGHESTRATING_REQUEST,
        FETCH_ALLPRODUCTINHIGHESTRATING_SUCCESS,
        FETCH_ALLPRODUCTINHIGHESTRATING_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import  {FETCH_COMMONPRODUCT_REQUEST,
            FETCH_COMMONPRODUCT_SUCCESS,
            FETCH_COMMONPRODUCT_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
        import  {FETCH_PRODUCTDETAIL_REQUEST ,
            FETCH_PRODUCTDETAIL_SUCCESS ,
            FETCH_PRODUCTDETAIL_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
        import  {FETCH_PRODUCTBYCOLORIDANDCATEGORYID_REQUEST,
            FETCH_PRODUCTBYCOLORIDANDCATEGORYID_SUCCESS ,
            FETCH_PRODUCTBYCOLORIDANDCATEGORYID_FAILURE } 
    from '../../Constants/typeActionRedux/typeAction';
    import {FETCH_PRODUCTBYSEARCHEDTEXT_REQUEST,
        FETCH_PRODUCTBYSEARCHEDTEXT_SUCCESS,
        FETCH_PRODUCTBYSEARCHEDTEXT_FAILURE }
from '../../Constants/typeActionRedux/typeAction';
import {FETCH_PRODUCTSUBIMAGE_REQUEST,
    FETCH_PRODUCTSUBIMAGE_SUCCESS,
    FETCH_PRODUCTSUBIMAGE_FAILURE}
from '../../Constants/typeActionRedux/typeAction';
import {FETCH_UPDATEPODUCTBYPRODUCTID_REQUEST,
    FETCH_UPDATEPODUCTBYPRODUCTID_SUCCESS,
    FETCH_UPDATEPODUCTBYPRODUCTID_FAILURE}
from '../../Constants/typeActionRedux/typeAction';
import {
    FETCH_PRODUCTCARTDETAILS_REQUEST,
    FETCH_PRODUCTCARTDETAILS_SUCCESS,
    FETCH_PRODUCTCARTDETAILS_FAILURE
}
from '../../Constants/typeActionRedux/typeAction';
const productCardData = {
    loading : true,
    productCard : [],
    allProduct : [],
    descendingProduct : [],
    ascendingProduct : [],
    allProductInHighestRating : [],
    commonProduct : [],
    productDetail : [],
    colorAndCategory : [],
    error : '',
    searchedText : [],
    productSubImage : [],
    updateProductByProductId : [],
    cartData : [],
    cartDataCount : 0
    
}

 const productCardReducer = (state = productCardData , action) =>{
     switch (action.type) {
         case FETCH_PRODUCT_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_PRODUCT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 productCard: action.payload,
                 error: '',
             }
             break;
         case FETCH_PRODUCT_FAILURE:
             return {
                 ...state,
                 loading: false,
                 productCard: [],
                 error: action.payload,
             }
             break;
         case FETCH_ALLPRODUCT_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_ALLPRODUCT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 allProduct: action.payload,
                 error: '',
             }
             break;
         case FETCH_ALLPRODUCT_FAILURE:
             return {
                 ...state,
                 loading: false,
                 allProduct: [],
                 error: action.payload,
             }
             break;
         case FETCH_DESCENDINGPRODUCT_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_DESCENDINGPRODUCT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 descendingProduct: action.payload,
                 error: '',
             }
             break;
         case FETCH_DESCENDINGPRODUCT_FAILURE:
             return {
                 ...state,
                 loading: false,
                 descendingProduct: [],
                 error: action.payload,
             }
             break;
         case FETCH_ASCENDINGPRODUCT_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_ASCENDINGPRODUCT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 ascendingProduct: action.payload,
                 error: '',
             }
             break;
         case FETCH_ASCENDINGPRODUCT_FAILURE:
             return {
                 ...state,
                 loading: false,
                 ascendingProduct: [],
                 error: action.payload,
             }
             break;
         case FETCH_ALLPRODUCTINHIGHESTRATING_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_ALLPRODUCTINHIGHESTRATING_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 allProductInHighestRating: action.payload,
                 error: '',
             }
             break;
         case FETCH_ALLPRODUCTINHIGHESTRATING_FAILURE:
             return {
                 ...state,
                 loading: false,
                 allProductInHighestRating: [],
                 error: action.payload,
             }
             break;
         case FETCH_COMMONPRODUCT_REQUEST:
             return {
                 ...state,
                 loading: true,
             }
             break;
         case FETCH_COMMONPRODUCT_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 commonProduct: action.payload,
                 error: '',
             }
             break;
         case FETCH_COMMONPRODUCT_FAILURE:
             return {
                 ...state,
                 loading: false,
                 commonProduct: [],
                 error: action.payload,
             }
             break;
             case FETCH_PRODUCTDETAIL_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
                break;
            case FETCH_PRODUCTDETAIL_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    productDetail: action.payload,
                    error: '',
                }
                break;
            case FETCH_PRODUCTDETAIL_FAILURE:
                return {
                    ...state,
                    loading: false,
                    productDetail: [],
                    error: action.payload,
                }
                break;
                case FETCH_PRODUCTBYCOLORIDANDCATEGORYID_REQUEST:
                    return {
                        ...state,
                        loading: true,
                    }
                    break;
                case FETCH_PRODUCTBYCOLORIDANDCATEGORYID_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        colorAndCategory: action.payload,
                        error: '',
                    }
                    break;
                case FETCH_PRODUCTBYCOLORIDANDCATEGORYID_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        colorAndCategory: [],
                        error: action.payload,
                    }
                    break;
                    case FETCH_PRODUCTBYSEARCHEDTEXT_REQUEST:
                        return {
                            ...state,
                            loading: true,
                        }
                        break;
                    case FETCH_PRODUCTBYSEARCHEDTEXT_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            searchedText: action.payload,
                            error: '',
                        }
                        break;
                    case FETCH_PRODUCTBYSEARCHEDTEXT_FAILURE:
                        return {
                            ...state,
                            loading: false,
                            searchedText: [],
                            error: action.payload,
                        }
                        break;
                        case FETCH_PRODUCTSUBIMAGE_REQUEST:
                            return {
                                ...state,
                                loading: true,
                            }
                            break;
                        case FETCH_PRODUCTSUBIMAGE_SUCCESS:
                            return {
                                ...state,
                                loading: false,
                                productSubImage : action.payload,
                                error: '',
                            }
                            break;
                        case FETCH_PRODUCTSUBIMAGE_FAILURE:
                            return {
                                ...state,
                                loading: false,
                                productSubImage: [],
                                error: action.payload,
                            }
                            break;
                            case FETCH_UPDATEPODUCTBYPRODUCTID_REQUEST:
                            return {
                                ...state,
                                loading: true,
                            }
                            break;
                        case FETCH_UPDATEPODUCTBYPRODUCTID_SUCCESS:
                            return {
                                ...state,
                                loading: false,
                                updateProductByProductId : action.payload,
                                error: '',
                            }
                            break;
                        case FETCH_UPDATEPODUCTBYPRODUCTID_FAILURE:
                            return {
                                ...state,
                                loading: false,
                                updateProductByProductId: [],
                                error: action.payload,
                            }
                            break;
                        case FETCH_PRODUCTCARTDETAILS_SUCCESS:
                            return {
                                ...state,
                                loadig : false, 
                                cartData : action.payload,
                                cartDataCount : action.payload.length
                            }
                            break;
         default: return state
             break;
    }
}

export default productCardReducer