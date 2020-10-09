const initialState = {
    dataInfo: [],
    isLoading: false,
    errors: ""
}

const FETCH_DATA_START = "FETCH_DATA_START"

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading:true,
                errors: ""
            }
        default:
            return state
    }
}

export default Reducer