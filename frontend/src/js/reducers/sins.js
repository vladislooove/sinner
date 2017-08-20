import api from '../api/'

const sins = (state = [], action) => {
    switch (action.type){
        case 'LOAD_SINS':
        return (api.listSins()).then(
            function(response){
                return response
            }, function(error){
                return []
            })
        
        case 'ADD_SINS':
        return [
            ...state,
            {
                name: action.name,
                category: action.category,
                circle: action.circle
            }
        ]

        default:
        return state
    }
}

export default sins;