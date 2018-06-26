import {combineReducers} from 'redux'
import {actionType} from '../actions/async'
const asyncList = (state = {
    isFetching: false,
    lists: []
}, action) => {
    switch (action.type) {
        case actionType.REQUEST_LIST_POSTS:
            return {
                ...state,
                isFetching: true,
            }
        case actionType.RECEIVE_LIST_POSTS:
            return {
                ...state,
                isFetching: false,
                lists: action.lists,
            }
        default:
            return state
    }
}

const asyncArticle = (state = {
    isFetching: false,
    article: Object.create(null)
}, action) => {
    switch (action.type) {
        case actionType.REQUEST_ARTICLE_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case actionType.RECEIVE_ARTICLE_POSTS:
            return {
                ...state,
                isFetching: false,
                article: action.article
            }
        default:
            return state
    }
}

export default combineReducers({
    asyncList,
    asyncArticle,
})
