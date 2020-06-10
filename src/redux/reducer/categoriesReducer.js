import { FETCH_CATEGORY_REQUEST , FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from "../../Constants/typeActionRedux/typeAction";
import {FETCH_CATEGORYID_REQUEST , FETCH_CATEGORYID_SUCCESS , FETCH_CATEGORYID_FAILURE} from '../../Constants/typeActionRedux/typeAction';


const categoriesData = {
    loading : true,
    categories : [],
    categoryId : [],
    error : ''
}
    const categoriesReducer = (state = categoriesData , action ) =>{
    // console.log("inreducer")
    // console.log('action' , action)
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading :  true
            }
            break;
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading :  false,
                categories : action.payload,
                error : ''
            }
            break;
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                loading :  false,
                categories : [],
                error : action.payload
            }
            break;
            case FETCH_CATEGORYID_REQUEST:
                return{
                    ...state,
                    loading : true,
                }
                break;
            case FETCH_CATEGORYID_SUCCESS:
                return{
                    ...state,
                     loading : false,
                     categoryId : action.payload,
                     error : ""
                    }
                break;
            case FETCH_CATEGORYID_FAILURE:
                return{
                    ...state,
                    loading : false,
                    categoryId :[],
                    error : action.payload,
                    }
                break;
            default : return state 
        }
}
export default categoriesReducer