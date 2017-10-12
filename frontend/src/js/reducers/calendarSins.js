
const calendarSins = (state = [], action) => {
    switch (action.type){        
        case 'LOAD_SIN_BY_DATE_SUCCESS':
        return action.payload.data

        case 'LOAD_SIN_BY_DATE_ERROR':
        return state;
        
        default:
        return state;
    }
}

export default calendarSins;