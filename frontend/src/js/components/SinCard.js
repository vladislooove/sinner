import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteSins } from '../actions/';

const SinCard = (props) =>{
    let formatDate = (date) =>{
        if(date < 10){
            return `0${date}`
        }
        return date;
    }

    let createdAt = new Date(props.createdAt)
    let createdAtDay = formatDate(createdAt.getDay());
    let createdAtMonth = formatDate(createdAt.getMonth() + 1);
    let createdAtYear = createdAt.getFullYear();

    let createdAtHours = formatDate(createdAt.getHours());
    let createdAtMinutes = formatDate(createdAt.getMinutes());

    return (
        <div className='col-xs-6 col-sm-4'>
            <Link className={`sin-card sin-card--${props.circle}`}
                    to={`/sins/${props.id}`}>
                <div className='sin-card__date'>
                    <span className='sin-card__date-item'>
                        {`${createdAtDay}.${createdAtMonth}.${createdAtYear}`}
                    </span>
                    <span className='sin-card__date-item'>
                        {`${createdAtHours}:${createdAtMinutes}`}
                    </span>
                </div>
                <div className={`sin-card__circle sin-card__circle--${props.circle}`}>
                    {props.circle}
                </div>
                <h1 className='sin-card__title'>
                    {props.name}
                </h1>
                <div className='sin-card__additional'>
                    {props.additional}
                </div>
                <div className="sin-card__circle-info"></div>
            </Link>
        </div>
    )
}

export default SinCard;