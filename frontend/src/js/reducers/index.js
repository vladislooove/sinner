import { combineReducers } from 'redux';
import sins from './sins';
import todaySins from './todaySins';
import loading from './loading';
import calendarSins from './calendarSins';
import currentSin from './currentSin';

const combinedStore = combineReducers({
    sins,
    todaySins,
    loading,
    calendarSins,
    currentSin
})


export default combinedStore;