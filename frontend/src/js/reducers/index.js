import { combineReducers } from 'redux';
import sins from './sins';
import todaySins from './todaySins';
import loading from './loading';
import calendarSins from './calendarSins';

const combinedStore = combineReducers({
    sins,
    todaySins,
    loading,
    calendarSins
})


export default combinedStore;