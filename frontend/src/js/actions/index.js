import api from '../api/';

export const loadSins = () => {
    return dispatch =>{
        dispatch({
            type: 'LOAD_SINS_START'
        })

        api.listSins().then(
            response => dispatch({
                type: 'LOAD_SINS_SUCCESS',
                payload: response
            },{
                type: 'LOAD_SINS_END'
            })
        )
        .catch(
            error => dispatch({
                type: 'LOAD_SINS_ERROR'
            },{
                type: 'LOAD_SINS_END'
            })
        )
    }
}

export const loadTodaySins = () => {
    return dispatch =>{
        dispatch({
            type: 'LOAD_SINS_START'
        })

        api.listTodaySins().then(
            response => dispatch({
                type: 'LOAD_SINS_SUCCESS',
                payload: response
            },{
                type: 'LOAD_SINS_END'
            })
        )
        .catch(
            error => dispatch({
                type: 'LOAD_SINS_ERROR'
            },{
                type: 'LOAD_SINS_END'
            })
        )
    }
}


export const addSins = (name, category, circle, additional) =>{
    return dispatch =>{
        dispatch({
            type: 'ADD_SINS_START'
        })

        api.addSins({name, category, circle, additional}).then(
            response => dispatch({
                type: 'ADD_SINS_END'
            },{
                type: 'ADD_SINS_SUCCESS'
            })
        )
        .catch(
            error => dispatch({
                type: 'ADD_SINS_ERROR'
            },{
                type: 'ADD_SINS_END'
            })
        )
    }
}

export const deleteSins = (id) => {
    return dispatch =>{
        dispatch({
            type: 'DELETE_SINS_START'
        })

        api.deleteSins(id).then(
            response => dispatch({
                type: 'DELETE_SINS_SUCCESS',
                payload: id
            },{
                type: 'DELETE_SINS_END'
            })
        )
        .catch(
            error => dispatch({
                type: 'DELETE_SINS_ERROR'
            },{
                type: 'DELETE_SINS_ERROR'
            })
        )
    }
}