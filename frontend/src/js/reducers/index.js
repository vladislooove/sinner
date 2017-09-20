import { combineReducers } from 'redux';
import sins from './sins';
import todaySins from './todaySins';
import loading from './loading';

const combinedStore = combineReducers({
    sins,
    todaySins,
    loading
})


export default combinedStore;