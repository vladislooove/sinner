import api from '../api/';

export const addSins = sins => {
    return {
        type: 'LOAD_SINS',
        sins: api.listSins()
    }
}