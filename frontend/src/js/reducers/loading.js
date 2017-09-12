
const loading = (state = false, action) => {
    switch (action.type){
        case 'LOAD_SINS_START':
        return true;
    
    default:
        return false;

    }
}

export default loading;