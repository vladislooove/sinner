
const loading = (state = false, action) => {
    switch (action.type){
        case 'LOAD_SINS_START':
        return true;

        case 'LOAD_SINS_END':
        return false;

        case 'ADD_SINS_START':
        return true;

        case 'ADD_SINS_END':
        return false;

        case 'DELETE_SINS_START':
        return true;

        case 'DELETE_SINS_END':
        return false;

        case 'LOAD_SIN_START':
        return true;

        case 'LOAD_SIN_END':
        return false;

        case 'LOAD_SIN_BY_DATE_START':
        return true;

        case 'LOAD_SIN_BY_DATE_END':
        return false;
    
    default:
        return false;

    }
}

export default loading;