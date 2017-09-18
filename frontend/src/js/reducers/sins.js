
const sins = (state = [], action) => {
    switch (action.type){        
        case 'LOAD_SINS_SUCCESS':
        return action.payload.data

        case 'LOAD_SINS_ERROR':
        return state;
        
        case 'ADD_SINS_SUCCESS':
        return [...state,
            {
                name: action.payload.name,
                category: action.payload.category,
                circle: action.payload.circle
            } 
        ]


        default:
        return state
    }
}

export default sins;