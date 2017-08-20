import api from '../api/';

export const loadSins = sins => {
    return {
        type: 'LOAD_SINS',
        sins
    }
}