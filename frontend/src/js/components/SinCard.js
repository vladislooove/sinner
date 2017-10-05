import React from 'react';
import { connect } from 'react-redux';

import { deleteSins } from '../actions/';



class SinCard extends React.Component{
    deleteSin(id){
        this.props.deleteSins(id);
    }
    render(){
        let formatDate = (date) =>{
            if(date < 10){
                return `0${date}`
            }
            return date;
        }

        let createdAt = new Date(this.props.createdAt)
        let createdAtDay = formatDate(createdAt.getDay());
        let createdAtMonth = formatDate(createdAt.getMonth() + 1);
        let createdAtYear = createdAt.getFullYear();

        let createdAtHours = formatDate(createdAt.getHours());
        let createdAtMinutes = formatDate(createdAt.getMinutes());

        return (
            <div className='col-xs-6 col-sm-4'>
                <article className={`sin-card sin-card--${this.props.circle}`}>
                    <div className='sin-card__date'>
                        <span className='sin-card__date-item'>
                            {`${createdAtDay}.${createdAtMonth}.${createdAtYear}`}
                        </span>
                        <span className='sin-card__date-item'>
                            {`${createdAtHours}:${createdAtMinutes}`}
                        </span>
                    </div>
                    <button className='sin-card__delete'
                            onClick={this.deleteSin.bind(this, this.props.id)}>
                        ×
                    </button>
                    <h1 className='sin-card__title'>
                        {this.props.name}
                    </h1>
                    <div className='sin-card__additional'>
                        {this.props.additional}
                    </div>
                    <div className="sin-card__circle-info"></div>
                </article>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteSins: (id) => {
            dispatch(deleteSins(id))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SinCard)