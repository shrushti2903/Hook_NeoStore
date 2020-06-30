import {
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILURE,
  } from "../../Constants/typeActionRedux/typeAction";

  const orderData = {
    loading : "true",
    customerOrder :[],
    error : '',
}

const orderReducer = (state = orderData , action) =>{
    switch (action.type) {
        case FETCH_ORDER_REQUEST:
            return {
                ...state,
                loading : true,
            }
            break;
            case FETCH_ORDER_SUCCESS :
                return {
                    ...state,
                    loading : false,
                    customerOrder : action.payload,
                    error : ''
                }
            break;
            case FETCH_ORDER_FAILURE :
                return {
                    ...state,
                    loading : false,
                    customerOrder : [],
                    error : action.payload,
                } 
                break;
        default: return state
            break;
    }

}

export default orderReducer