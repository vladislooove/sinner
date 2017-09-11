import api from '../api/'

const sins = (state = [], action) => {
    switch (action.type){
        case 'LOAD_SINS_START':
        return [
            ...state,
            state.isLoading: true
        ]
        
        case 'LOAD_SINS_SUCCESS':
        return [
            ...state,
            sins,
            state.isLoading: false
        ]

        case 'LOAD_SINS_ERROR':
        console.log('error')
        
        case 'ADD_SINS':
        return [
            ...state
        ]

        default:
        return state
    }
}

export default sins;