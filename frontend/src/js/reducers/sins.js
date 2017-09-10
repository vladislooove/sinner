import api from '../api/'

const sins = (state = [], action) => {
    switch (action.type){
        case 'LOAD_SINS':
        console.log(state)
        return [...state,
            api.listSins()
            
        ]
        
        case 'ADD_SINS':
        return [
            ...state
        ]

        default:
        return state
    }
}

export default sins;