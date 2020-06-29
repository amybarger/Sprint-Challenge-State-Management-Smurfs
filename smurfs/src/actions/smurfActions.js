import axios from 'axios';

export const FETCH_SMURF_FAILURE = 
'FETCH_SMURF_FAILURE';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_START'}) ;
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: 'FETCH_SMURF_SUCCESS',
                payload: res.data},
                console.log("Smurf data retrieved"))
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_SMURF_FAILURE',
                    payload: `Error ${err.response} : ${err.response}`
                })
            })
    }
}