import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions/smurfActions';

const Smurf = props => {
    useEffect(() => {
        props.fetchSmurf();
    }, [])

    return (
        <div>
            {props.isFetching}
            <p>{props.name}</p>
            <p className="error">{props.error}</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        name: state.smurfReducer.name,
        isFetching: state.smurfReducer.isFetching,
        error: state.smurfReducer.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf })
    (Smurf);