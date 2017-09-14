
const loading = (state = false, action) => {
    switch (action.type){
        case 'LOAD_SINS_START':
        return true;

        case 'LOAD_SINS_END':
        return false;

        case 'ADD_SINS_START':
        console.log('start')
        return true;

        case 'ADD_SINS_END':
        console.log('end')
        return false;
    
    default:
        return false;

    }
}

export default loading;