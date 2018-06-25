import axios from '../util'

export const actionType = {
    REQUEST_POSTS: 'REQUEST_POSTS',
    RECEIVE_POSTS: 'RECEIVE_POSTS',
}

export const requestPosts = () => ({
    type: actionType.REQUEST_POSTS
})

export const receivePosts = (items) => ({
    type: actionType.RECEIVE_POSTS,
    items
})

export const fetchPost = () => (dispatch) => {
    dispatch(requestPosts())
    axios.get('/topics')
        .then(resp => {
            dispatch(receivePosts(resp.data.data))
        })
}
