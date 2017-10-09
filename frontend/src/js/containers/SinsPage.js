import React from 'react';
import { connect } from 'react-redux';
import { loadSinById, deleteSins } from '../actions/'


class SinsPage extends React.Component{

    componentDidMount(){
        this.props.loadSinById(this.props.match.params.id)
    }
    deleteSins(id){
        this.props.deleteSins(id);
    }

    render(){
        let formatDate = (date) =>{
            if(date < 10){
                return `0${date}`
            }
            return date;
        }

        let createdAt = new Date(this.props.currentSin.createdAt)
        let createdAtDay = formatDate(createdAt.getDay());
        let createdAtMonth = formatDate(createdAt.getMonth() + 1);
        let createdAtYear = createdAt.getFullYear();

        let createdAtHours = formatDate(createdAt.getHours());
        let createdAtMinutes = formatDate(createdAt.getMinutes());

        return (
            <div className='sin-page'>
                <h1>{this.props.currentSin.name}</h1>
                <div className="sin-page__additional">
                    {this.props.currentSin.additional}
                </div>
                <div className='sin-page__date'>
                    <span className='sin-page__date-item'>
                        {`${createdAtDay}.${createdAtMonth}.${createdAtYear}`}
                    </span>
                    <span className='sin-page__date-item'>
                        {`${createdAtHours}:${createdAtMinutes}`}
                    </span>
                </div>
                <div onClick={this.deleteSins.bind(this, this.props.currentSin._id)}>delete</div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSin: state.currentSin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSinById: (id) => {
            dispatch(loadSinById(id))
        },
        deleteSins: (id) => {
            dispatch(deleteSins(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinsPage);