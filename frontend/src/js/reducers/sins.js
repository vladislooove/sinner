import api from '../api/'

const sins = (state = [], action) => {
    switch (action.type){        
        case 'LOAD_SINS_SUCCESS':
        console.log(action.payload.data)
        return action.payload.data

        case 'LOAD_SINS_ERROR':
        console.log('error')
        return state;
        
        case 'ADD_SINS':
        return state 

        default:
        return state
    }
}

export default sins;