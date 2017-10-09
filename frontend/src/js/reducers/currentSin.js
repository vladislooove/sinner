const currentSin = (state = {}, action) => {
    switch (action.type){        
        case 'LOAD_SIN_SUCCESS':
        return action.payload.data

        case 'LOAD_SIN_ERROR':
        return state;
        
        default:
        return state
    }
}

export default currentSin;