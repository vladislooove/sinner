import React from 'react';
import { connect } from 'react-redux';

import { loadTodaySins } from '../actions/';

import SinsList from '../components/SinsList';


class Home extends React.Component{
    componentDidMount(){
        this.props.loadTodaySins()
    }
    render(){
        return (
            <div> 
                HOME 
                <h1> today: </h1>
                <SinsList sins={this.props.todaySins} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todaySins: state.todaySins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodaySins: () =>{
            dispatch(loadTodaySins())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);