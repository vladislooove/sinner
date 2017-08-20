import React from 'react';
import { connect } from 'react-redux';

import loadSins from '../actions/'
import api from '../api/'

let sins = ({ dispatch }) => (
    <div>
        Sins
        <button onClick={ dispatch(loadSins()) }>
            load
        </button>
    </div>
)

sins = connect()(sins);

export default sins;