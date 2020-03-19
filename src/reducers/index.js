import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender'
import entries from './Entries'
const reducers = combineReducers({
    entries,
    penderReducer
})

export default reducers