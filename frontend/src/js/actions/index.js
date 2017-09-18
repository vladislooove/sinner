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

export const addSins = (name, category, circle) =>{
    return dispatch =>{
        dispatch({
            type: 'ADD_SINS_START'
        })

        api.addSins({name, category, circle}).then(
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