import React from 'react';
import { connect } from 'react-redux';

import { addSins } from '../actions/';

import { infernoData } from '../localData/data';


class AddSins extends React.Component{
    constructor(props) {
        super(props);
        this.addSins = this.addSins.bind(this);
        this.form = {};
    }

    addSins(event){
        event.preventDefault();
        let name = this.form.input.value;
        let category = this.form.select.selectedOptions[0].text;
        let circle = this.form.select.value;
        let additional = this.form.textarea.value;
        this.props.addSins(name, category, circle, additional)
    }
        
    render(){
        return (<form className="add-sins"
                     onSubmit={this.addSins}>
                    <div className="add-sins__group">
                        <div className="add-sins__title">
                            What have you done wrong?
                        </div>
                        <input className="add-sins__input"
                            placeholder="For example 'lied'"
                            ref={(input) => this.form.input = input} />
                        <textarea ref={(textarea) => this.form.textarea = textarea} />
                    </div>
                    <div className="add-sins__group">
                        <div className="add-sins__title">
                            What kind of sin have you done?
                        </div>
                        <select name="categories"
                                ref={(select) => this.form.select = select}>
                            {infernoData.map((item)=>{
                                return ( 
                                    <option key={item.circle}
                                            value={item.circle}>
                                        {item.name}
                                    </option>
                                )}
                            )}
                        </select>
                    </div>
                    <div className="add-sins__group">
                        <button className="add-sins__submit">
                            OK
                        </button>
                    </div>
                </form>
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
        addSins: (name, category, circle, additional) => {
            dispatch(addSins(name, category, circle, additional))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSins);