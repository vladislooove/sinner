import React from 'react';
import { connect } from 'react-redux';

import { loadSins, deleteSins } from '../actions/'
import api from '../api/'

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