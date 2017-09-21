import React from 'react';
import { connect } from 'react-redux';

import { loadTodaySins } from '../actions/'


class Home extends React.Component{
    componentDidMount(){
        this.props.loadTodaySins()
    }
    render(){
        return (
            <div> 
                HOME 
                <h1> today: </h1>
                {this.props.todaySins.map((item)=>{
                    return (<p key={item._id}>{item.name}, {item.circle}, {item.createdAt}, {item.category}</p>)
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todaySins: state.todaySins,
        isLoading: state.loading
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