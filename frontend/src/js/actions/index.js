import api from '../api/';

export const loadSins = (sins) => {
    return dispatch =>{
        dispatch({
            type: 'LOAD_SINS_START'
        })

        api.listSins().then(
            response => dispatch({
                type: 'LOAD_SINS_SUCCESS',
                payload: response
            })
        )
        .catch(
            error => dispatch({
                type: 'LOAD_SINS_ERROR'
            })
        )
    }
}