import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_FORGOTPASSWORD_REQUEST,
  FETCH_FORGOTPASSWORD_SUCCESS,
  FETCH_FORGOTPASSWORD_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_CONTACTUS_REQUEST,
  FETCH_CONTACTUS_SUCCESS,
  FETCH_CONTACTUS_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_CUSTOMERADDRESS_REQUEST,
  FETCH_CUSTOMERADDRESS_SUCCESS,
  FETCH_CUSTOMERADDRESS_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_CUSTOMERPROFILE_REQUEST,
  FETCH_CUSTOMERPROFILE_SUCCESS,
  FETCH_CUSTOMERPROFILE_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
import {
  FETCH_CUSTOMERUPDATEADDRESS_REQUEST,
  FETCH_CUSTOMERUPDATEADDRESS_SUCCESS,
  FETCH_CUSTOMERUPDATEADDRESS_FAILURE,
} from "../../Constants/typeActionRedux/typeAction";
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


const customerData = {
  loginData: [],
  forgotPassword: [],
  contactUs: [],
  register: [],
  customerAddress: [],
  customerProfile: [],
  updateAddress: [],
  addAddress :[],
  delAddressByAddressId : [],
  addProductToCheckout : [],
  loading: true,
  error: "",
};

const CustomerDataReducer = (state = customerData, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: action.payload,
        error: "",
      };
      break;
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loginData: [],
        error: action.payload,
      };
      break;
    case FETCH_FORGOTPASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotPassword: action.payload,
        error: "",
      };
      break;
    case FETCH_FORGOTPASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        forgotPassword: [],
        error: action.payload,
      };
      break;
    case FETCH_CONTACTUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_CONTACTUS_SUCCESS:
      return {
        ...state,
        loading: false,
        contactUs: action.payload,
        error: "",
      };
      break;
    case FETCH_CONTACTUS_FAILURE:
      return {
        ...state,
        loading: false,
        contactUs: [],
        error: action.payload,
      };
      break;
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: action.payload,
        error: "",
      };
      break;
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        register: [],
        error: action.payload,
      };
      break;
    case FETCH_CUSTOMERADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_CUSTOMERADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        customerAddress: action.payload,
        error: "",
      };
      break;
    case FETCH_CUSTOMERADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        customerAddress: [],
        error: action.payload,
      };
      break;
    case FETCH_CUSTOMERPROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_CUSTOMERPROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        customerProfile: action.payload,
        error: "",
      };
      break;
    case FETCH_CUSTOMERPROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        customerProfile: [],
        error: action.payload,
      };
      break;
    case FETCH_CUSTOMERUPDATEADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_CUSTOMERUPDATEADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        updateAddress: action.payload,
        error: "",
      };
      break;
    case FETCH_CUSTOMERUPDATEADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        updateAddress: [],
        error: action.payload,
      };
      break;
      case FETCH_ADDADDRESS_REQUEST:
        return {
          ...state,
          loading: true,
        };
        break;
      case FETCH_ADDADDRESS_SUCCESS:
        return {
          ...state,
          loading: false,
          addAddress: action.payload,
          error: "",
        };
        break;
      case FETCH_ADDADDRESS_FAILURE:
        return {
          ...state,
          loading: false,
          addAddress: [],
          error: action.payload,
        };
        break;
        case FETCH_DELADDRESSBYADDRESSID_REQUEST:
            return {
              ...state,
              loading: true,
            };
            break;
          case FETCH_DELADDRESSBYADDRESSID_SUCCESS:
            return {
              ...state,
              loading: false,
              delAddressByAddressId: action.payload,
              error: "",
            };
            break;
          case FETCH_ADDPRODUCTTOCARTCHECKOUT_FAILURE:
            return {
              ...state,
              loading: false,
              delAddressByAddressId: [],
              error: action.payload,
            };
            break;
            case FETCH_ADDPRODUCTTOCARTCHECKOUT_REQUEST:
              return {
                ...state,
                loading: true,
              };
              break;
            case FETCH_ADDPRODUCTTOCARTCHECKOUT_SUCCESS:
              return {
                ...state,
                loading: false,
                addProductToCheckout: action.payload,
                error: "",
              };
              break;
            case FETCH_ADDPRODUCTTOCARTCHECKOUT_FAILURE:
              return {
                ...state,
                loading: false,
                addProductToCheckout: [],
                error: action.payload,
              };
              break;
    default:
      return state;
      break;
  }
};

export default CustomerDataReducer;
