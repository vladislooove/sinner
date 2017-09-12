import { combineReducers } from 'redux'
import sins from './sins'
import loading from './loading'

const combinedStore = combineReducers({
    sins,
    loading
})


export default combinedStore;