import React from 'react';
import { connect } from 'react-redux';

import { addSins } from '../actions/'


class AddSins extends React.Component{
    
    render(){
        return (<div className="add-sins">
                    <div className="add-sins__group">
                        <div className="add-sins__title">
                            What have you done wrong?
                        </div>
                        <input className="add-sins__input"
                            placeholder="For example 'lied'" />
                    </div>
                    <div className="add-sins__group">
                        <div className="add-sins__title">
                            What kind of sin have you done?
                        </div>
                        <select name="categories">
                            
                        </select>
                    </div>
                    <div className="add-sins__group">
                        <button className="add-sins__submit" onClick={this.props.addSins()}>
                            OK
                        </button>
                    </div>
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
        addSins: () => {
            dispatch(addSins())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSins);