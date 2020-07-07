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

export const smurfPost = (newSmurf) => {
    return dispatch => {
        axios
        .post("http://localhost:3333/smurfs", {
            name: newSmurf.name,
            age: newSmurf.age,
            height: newSmurf.height,
            id: Date.now()
        }
            )
        .then(response => {console.log("Response received for POST axios", response)
        dispatch({ type: 'POSTING_SMURF', payload: response.data})
        ;})
        .catch(err => console.log("POST axios error",err));
    };
}