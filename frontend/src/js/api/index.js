import axios from 'axios';

//see backend/server/etc/config.json

const apiPrefix = 'http://localhost:8080';

export default {
    listSins(){
        return axios.get(`${apiPrefix}/sins`);
    },

    listTodaySins(){
    	return axios.get(`${apiPrefix}/sins/today`);
    },

    listSinsByDate(date){
        return axios.get(`${apiPrefix}/sins/${date.dayFrom}/${date.monthFrom}/${date.yearFrom}/${date.dayTill}/${date.monthTill}/${date.yearTill}`);
    },

    addSins(data){
        return axios.post(apiPrefix + '/sins', data);
    },

    deleteSins(sinsId){
        return axios.delete(apiPrefix + '/sins/' + sinsId);
    }
}