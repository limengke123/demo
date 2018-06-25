import {actionType} from '../actions/async'
export default (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case actionType.REQUEST_POSTS:
            return {
                isFetching: true,
                ...state,
            }
        case actionType.RECEIVE_POSTS:
            return {
                isFetching: false,
                items: action.items,
                ...state
            }
        default:
            return state
    }
}
