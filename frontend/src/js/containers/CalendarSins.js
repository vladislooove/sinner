import React from 'react';
import { connect } from 'react-redux';

import SinsList from '../components/SinsList';

class CalendarSins extends React.Component{
    render(){
        return (
            <div>
                <h1>Знайдені результати:</h1>
                <SinsList sins={this.props.calendarSins} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        calendarSins: state.calendarSins
    }
}

export default connect(
    mapStateToProps,
    null
)(CalendarSins)