
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
        
        case 'DELETE_SINS_SUCCESS':
        return state.filter((item) =>  item._id != action.payload )

        default:
        return state
    }
}

export default sins;