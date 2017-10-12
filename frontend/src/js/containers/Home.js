import React from 'react';
import { connect } from 'react-redux';

import { loadTodaySins } from '../actions/';

import SinsList from '../components/SinsList';
import Progress from '../components/Progress';


class Home extends React.Component{
    componentDidMount(){
        this.props.loadTodaySins()
    }
    render(){
        return (
            <div> 
                <h1>Список ваших гріхів за сьогодні: </h1>
                <SinsList sins={this.props.todaySins} />
                <div className='status'>
                    <h2>Ви відійшли від Бога на:</h2>
                    <Progress  sins={this.props.todaySins}/>
                </div>
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