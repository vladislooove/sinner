import React from 'react';
import { connect } from 'react-redux';

import { loadSins } from '../actions/'
import api from '../api/'

class Sins extends React.Component{
    render(){
        return(
            <div>
                Sins
                <button onClick={this.props.loadSins}>
                    load
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSins: () => {
            dispatch(loadSins())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins)