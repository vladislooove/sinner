import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadSins, loadTodaySins, deleteSins } from '../actions/'

class Sins extends React.Component{
    componentDidMount(){
        this.props.loadSins()
    }
    deleteSin(item){
        this.props.deleteSins(item._id);
    }
    render(){
        return(
            <div>
                Sins
                {this.props.sins.length ?
                    <ul>
                        {this.props.sins.map((item)=>{
                            return (
                                <li key={item._id}>{item.name}, {item.circle}, {item.createdAt}, {item.category}
                                    <button onClick={this.deleteSin.bind(this, item)}>delete</button>
                                    <Link to={`/sins/${item._id}`}>link</Link>
                                </li>
                            )
                        })}
                    </ul>
                    : ''}
                {this.props.isLoading ? 'loading' : ''}
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins,
        isLoading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSins: () => {
            dispatch(loadSins())
        },
        deleteSins: (id) => {
            dispatch(deleteSins(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins)