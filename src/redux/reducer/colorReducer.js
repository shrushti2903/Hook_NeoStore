import {FETCH_COLOR_REQUEST , FETCH_COLOR_SUCCESS , FETCH_COLOR_FAILURE} from '../../Constants/typeActionRedux/typeAction';
import {FETCH_COLORID_REQUEST, FETCH_COLORID_SUCCESS , FETCH_COLORID_FAILURE} from '../../Constants/typeActionRedux/typeAction';

const colorData = {
    loading : "true",
    color : [],
    colorId : [],
    error : '',
}

const colorReducer = (state = colorData , action) =>{
    switch (action.type) {
        case FETCH_COLOR_REQUEST:
            return {
                ...state,
                loading : true,
            }
            break;
            case FETCH_COLOR_SUCCESS :
                return {
                    ...state,
                    loading : false,
                    color : action.payload,
                    error : ''
                }
            break;
            case FETCH_COLOR_FAILURE :
                return {
                    ...state,
                    loading : false,
                    color : [],
                    error : action.payload,
                } 
                
                case FETCH_COLORID_REQUEST:
                    return{
                        ...state,
                        loading : true,
                    }
                    
                    break;
                case FETCH_COLORID_SUCCESS:
                    return{
                        ...state,
                        loading : false,
                        colorId : action.payload,
                        error : '',
                    }
                        
                    break;
                case FETCH_COLORID_FAILURE:
                    return{
                        ...state,
                        loading : false,
                        colorId : [],
                        error : action.payload,
                    }
                        
                    break;
        default: return state
            break;
    }

}

export default colorReducer