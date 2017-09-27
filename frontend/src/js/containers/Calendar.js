import React from 'react';
import { DateRange } from 'react-date-range';


class Calendar extends React.Component{
    handleSelect(range){
        console.log(range);
    }
    render(){
        let date = new Date();
        const today = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`; 
        return (
            <h1>
                <DateRange
                    onChange={this.handleSelect}
                    firstDayOfWeek={1}
                    maxDate={today}
                 />
            </h1>
        )
    }
}

export default Calendar;

const calendarTheme = {
    DateRange: {
        background   : '#ffffff'
    },
    Calendar: {
        background: 'transparent',
        color: '#95a5a6',
    },
    MonthAndYear: {
        background: '#e74c3c',
        color: '#9e3024'
    },
    MonthButton: {
        background: '#c0392b'
    },
    MonthArrowPrev: {
        borderRightColor: '#d96659',
    },
    MonthArrowNext: {
        borderLeftColor: '#d96659',
    },
    Weekday: {
        background: '#e74c3c',
        color: '#9e3024'
    },
    Day: {
        transition: 'transform .1s ease, box-shadow .1s ease, background .1s ease'
    },
    DaySelected: {
        background: '#8e44ad'
    },
    DayActive: {
        background: '#8e44ad',
        boxShadow: 'none'
    },
    DayInRange: {
        background: '#9b59b6',
        color: '#fff'
    },
    DayHover: {
        background: '#ffffff',
        color: '#7f8c8d',
        transform: 'scale(1.1) translateY(-10%)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
    }
}
