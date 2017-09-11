import { combineReducers } from 'redux'
import sins from './sins'

const combinedStore = combineReducers({
    sins,
    isLoading: false
})


export default combinedStore;