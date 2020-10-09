import axios from "axios"

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const fetchDataInfo = () => (dispatch) => {
    dispatch({type: FETCH_START})
    axios
        .get("http://www.url.url/getAPI")
        .then((response)  => dispatch({type: FETCH_SUCCESS, payload: response.data}))
        .catch((error)=> dispatch({type: FETCH_FAILURE, payload: error}))
}

export const POST_START = "POST_START"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_FAILURE = "POST_FAILURE"
export const posDataInfo = (datum) => (dispatch) => {
    dispatch({type: POST_START})
    axios
        .post("http://www.url.url/postAPI", datum)
        .then((response)  => dispatch({type: POST_SUCCESS, payload: response.data}))
        .catch((error)=> dispatch({type: POST_FAILURE, payload: error}))
}