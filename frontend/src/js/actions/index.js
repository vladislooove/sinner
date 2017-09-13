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

export const addSins = () =>{
    return dispatch =>{
        dispatch({
            type: 'ADD_SINS'
        })
    }
}