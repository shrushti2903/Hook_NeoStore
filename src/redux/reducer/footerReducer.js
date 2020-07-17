import {
  FETCH_GETFOOTERDATA_REQUEST,
  FETCH_GETFOOTERDATA_SUCCESS,
  FETCH_GETFOOTERDATA_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_GETTERMSANDCONDITIONS_REQUEST,
  FETCH_GETTERMSANDCONDITIONS_SUCCESS,
  FETCH_GETTERMSANDCONDITIONS_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_GETGAURENTEE_REQUEST,
  FETCH_GETGAURENTEE_SUCCESS,
  FETCH_GETGAURENTEE_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";

const footerData = {
  getFooterData: [],
  getTermsAndConditions: [],
  getGuarantee: [],
  loading: true,
  error: "",
};

const footerReducer = (state = footerData, action) => {
  switch (action.type) {
    case FETCH_GETFOOTERDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_GETFOOTERDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        getFooterData: action.payload,
        error: "",
      };
      break;
    case FETCH_GETFOOTERDATA_FAILURE:
      return {
        ...state,
        loading: false,
        getFooterData: [],
        error: action.payload,
      };
      break;
    case FETCH_GETTERMSANDCONDITIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_GETTERMSANDCONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        getTermsAndConditions: action.payload,
        error: "",
      };
      break;
    case FETCH_GETTERMSANDCONDITIONS_FAILURE:
      return {
        ...state,
        loading: false,
        getTermsAndConditions: [],
        error: action.payload,
      };
      break;
    case FETCH_GETGAURENTEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_GETGAURENTEE_SUCCESS:
      return {
        ...state,
        loading: false,
        getGuarantee: action.payload,
        error: "",
      };
      break;
    case FETCH_GETGAURENTEE_FAILURE:
      return {
        ...state,
        loading: false,
        getGuarantee: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default footerReducer;
