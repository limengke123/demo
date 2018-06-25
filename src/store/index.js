import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

const middleware = [
    thunkMiddleware,
    loggerMiddleware,
]

let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store
