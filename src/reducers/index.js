import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import asyncData from './async-list'

const rootReducer = combineReducers({
    todos,
    filter,
    asyncData,
})

export default rootReducer
