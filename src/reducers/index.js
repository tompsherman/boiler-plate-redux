import { 
    FETCH_DATA_FAILURE, 
    FETCH_DATA_START, 
    FETCH_DATA_SUCCESS, 
    POST_DATA_FAILURE, 
    POST_DATA_START, 
    POST_DATA_SUCCESS } from "../actions"

const initialState = {
    dataInfo: [],
    isLoading: false,
    errors: ""
}

const FETCH_DATA_START = "FETCH_DATA_START"
//******YOU WILL DELETE OLD FETCH_DATA_DATA_START 4-5 STEPS LATER*******\\


const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading:true,
                errors: ""
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                dataInfo: action.payload,
                isLoading:false,
                errors: ""
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                errors: ""
            }
        case POST_DATA_START:
            return {
                ...state,
                dataInfo: [...state.dataInfo],
                isLoading:true,
                errors: ""
            }
        case POST_DATA_SUCCESS:
            return {
                ...state,
                dataInfo: action.payload,
                isLoading:false,
                errors: ""
            }
        case POST_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default reducer