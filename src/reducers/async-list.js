import {actionType} from '../actions/async'
export default (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case actionType.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
            }
        case actionType.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.items,
            }
        default:
            return state
    }
}
