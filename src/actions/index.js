import axios from "axios"

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const fetchDataInfo = () => (dispatch) => {
    dispatch({type: FETCH_DATA_START})
    axios
        .get("http://www.url.url/getAPI")
        .then((response)  => dispatch({type: FETCH_DATA_SUCCESS, payload: response.data}))
        .catch((error)=> dispatch({type: FETCH_DATA_FAILURE, payload: error}))
}

export const POST_DATA_START = "POST_DATA_START"
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS"
export const POST_DATA_FAILURE = "POST_DATA_FAILURE"
export const postDataInfo = (datum) => (dispatch) => {
    dispatch({type: POST_DATA_START})
    axios
        .post("http://www.url.url/postAPI", datum)
        .then((response)  => dispatch({type: POST_DATA_SUCCESS, payload: response.data}))
        .catch((error)=> dispatch({type: POST_DATA_FAILURE, payload: error}))
}