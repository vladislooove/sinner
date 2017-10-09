import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadSins } from '../actions/'

import SinsList from '../components/SinsList';

class Sins extends React.Component{
    componentDidMount(){
        this.props.loadSins()
    }
    render(){
        return(
            <div>
                <h1>Список ваших гріхів:</h1>
                <SinsList sins={this.props.sins} />
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
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins)