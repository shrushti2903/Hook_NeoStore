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

const cartData = {
  allCartData: [],
  deletProductData: [],
  addToCart: [],
  getCartData: [],
  cartCount: 0,
  loading: true,
  error: "",
};

const CartDataReducer = (state = cartData, action) => {
  switch (action.type) {
    case FETCH_ALLCARTDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_ALLCARTDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        allCartData: action.payload,
        error: "",
      };
      break;
    case FETCH_ALLCARTDATA_FAILURE:
      return {
        ...state,
        loading: false,
        allCartData: [],
        error: action.payload,
      };
      break;
    case FETCH_DELETPRODUCTBYPRODUCTID_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_DELETPRODUCTBYPRODUCTID_SUCCESS:
      return {
        ...state,
        loading: false,
        deletProductData: action.payload,
        error: "",
      };
      break;
    case FETCH_DELETPRODUCTBYPRODUCTID_FAILURE:
      return {
        ...state,
        loading: false,
        deletProductData: [],
        error: action.payload,
      };
      break;
    case FETCH_ADDTOCARTDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_ADDTOCARTDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        addToCart: action.payload,
        error: "",
      };
      break;
    case FETCH_ADDTOCARTDATA_FAILURE:
      return {
        ...state,
        loading: false,
        addToCart: [],
        error: action.payload,
      };
      break;
    case FETCH_GETCARTDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_GETCARTDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        getCartData: action.payload,
        cartCount: action.payload.length,
        error: "",
      };
      break;
    case FETCH_GETCARTDATA_FAILURE:
      return {
        ...state,
        loading: false,
        getCartData: [],
        cartCount: 0,
        error: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default CartDataReducer;
