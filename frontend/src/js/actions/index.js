import api from '../api/';

export const loadSins = (sins, isLoading) => {
    return dispatch =>{
        dispatch({
            type: 'LOAD_SINS_START',
            isLoading
        })

        api.listSins().then(
            success => dispatch({
                type: 'LOAD_SINS_SUCCESS',
                sins,
                isLoading
            }),
            error => dispatch({
                type: 'LOAD_SINS_ERROR',
                isLoading
            })
        )
    }
}